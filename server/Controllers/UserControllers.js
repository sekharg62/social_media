import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'
// Get a user
export const getUser = async (req, res) => {
    const id = req.params.id; // Corrected this line
    try {
        const user = await UserModel.findById(id);
        if (!user) return res.status(404).send('User not found');
        const {password,...otherDetails} = user._doc
        res.status(200).json(otherDetails)
    } catch (error) {
        res.status(500).send(error);
    }
};
 

//update a user 
export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { currentUserId, currentUserAdminStatus, password } = req.body;

    if (currentUserId === id || currentUserAdminStatus) {
        try {
            // If the password is being updated, hash it
            if (password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt);
            }

            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json({ message: "You don't have permission to update this user" });
    }
};

// Delete a user
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const { currentUserId, currentUserAdminStatus } = req.body;

    if (currentUserId === id || currentUserAdminStatus) {
        try {
            await UserModel.findByIdAndDelete(id); 
            res.status(200).json({ message: "User deleted successfully" }); 
        } catch (error) {
            res.status(500).json({ message: "Error deleting user", error });
        }
    } else {
        res.status(403).json({ message: "You don't have permission to delete this user" });
    }
};
//follow a user

export const followUser = async (req, res) => {
    const userId = req.params.id;
    const { currentUserId } = req.body;

    if (currentUserId === userId) {
        return res.status(403).json({ message: "You can't follow yourself" });
    } else {
        try {
            const followUser = await UserModel.findById(userId);
            const followingUser = await UserModel.findById(currentUserId);

            if (!followUser) {
                return res.status(404).json({ message: "User to follow not found" });
            }

            if (!followingUser) {
                return res.status(404).json({ message: "Current user not found" });
            }

            if (!followUser.followers.includes(currentUserId)) {
                await followUser.updateOne({ $push: { followers: currentUserId } });
                await followingUser.updateOne({ $push: { following: userId } });
                res.status(200).json("User followed!");
            } else {
                res.status(403).json("User already followed by you");
            }
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};

//unfollow a user 
export const unfollowUser = async (req, res) => {
    const userId = req.params.id;
    const { currentUserId } = req.body;

    if (currentUserId === userId) {
        return res.status(403).json({ message: "You can't unfollow yourself" });
    } else {
        try {
            const followUser = await UserModel.findById(userId);
            const followingUser = await UserModel.findById(currentUserId);

            if (!followUser) {
                return res.status(404).json({ message: "User to unfollow not found" });
            }

            if (!followingUser) {
                return res.status(404).json({ message: "Current user not found" });
            }

            if (followUser.followers.includes(currentUserId)) {
                await followUser.updateOne({ $pull: { followers: currentUserId } });
                await followingUser.updateOne({ $pull: { following: userId } });
                res.status(200).json("User unfollowed!");
            } else {
                res.status(403).json("You do not follow this user");
            }
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};
