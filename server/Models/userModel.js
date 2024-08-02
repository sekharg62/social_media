import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    password:{
        type: String,
        required: true,
      },
    
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePicture: {
      type: String,
    },
    coverPicture: {
      type: String,
    },
    about: {
      type: String,
    },
    livesin: {
      type: String,
    },
    worksAt: {
      type: String,
    },
    relationshipStatus: {
      type: String,
    },
    followers: [],
    following: [],
  },
  { timestamps: true }  // Correct option to add createdAt and updatedAt fields
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
