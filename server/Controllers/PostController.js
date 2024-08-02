import PostModel from "../Models/postModel.js"
import UserModel from "../Models/userModel.js";

import mongoose from "mongoose"

export const createPost = async (req, res) => {
    const newPost = new PostModel(req.body);
  
    try {
      await newPost.save();
      res.status(200).json("Post Created!");
    } catch (error) {
      res.status(500).json(error);
    }
  };  


  // Get a post by ID
export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostModel.findById(id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Internal Server error", error });
    }
};
// Update a post by ID
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { userId, desc, likes, image } = req.body;

    try {
        const post = await PostModel.findById(id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Only allow the owner of the post to update it
        if (post.userId !== userId) {
            return res.status(403).json({ message: "You can only update your own posts" });
        }

        // Update the post fields
        if (desc) post.desc = desc;
        if (likes) post.likes = likes;
        if (image) post.image = image;

        await post.save();
        res.status(200).json({ message: "Post updated successfully", post });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};


// Delete a post by ID
export const deletePost = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
  
    try {
      const post = await PostModel.findById(id);
      if (post.userId === userId) {
        await post.deleteOne();
        res.status(200).json("POst deleted successfully");
      } else {
        res.status(403).json("Action forbidden");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

 // like/dislike a post
export const likePost = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
  
    try {
      const post = await PostModel.findById(id);
      if (!post.likes.includes(userId)) {
        await post.updateOne({ $push: { likes: userId } });
        res.status(200).json("Post liked");
      } else {
        await post.updateOne({ $pull: { likes: userId } });
        res.status(200).json("Post Unliked");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

  // Get Timeline POsts
export const getTimelinePosts = async (req, res) => {
    const userId = req.params.id;
  
    try {
      const currentUserPosts = await PostModel.find({ userId: userId });
      const followingPosts = await UserModel.aggregate([
        {
          $match: {
            _id: new mongoose.Types.ObjectId(userId),
          },
        },
        {
          $lookup: {
            from: "posts",
            localField: "following",
            foreignField: "userId", 
            as: "followingPosts",
          },
        },
        {
          $project: {
            followingPosts: 1, 
            _id: 0,
          },
        },
      ]);
  
      res
        .status(200)
        .json(currentUserPosts.concat(...followingPosts[0].followingPosts)
        .sort((a,b)=>{
            return b.createdAt - a.createdAt;
        })
        );
    } catch (error) {
      res.status(500).json(error);
    }
  };