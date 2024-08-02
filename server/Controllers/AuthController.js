import UserModel from "../Models/userModel.js";

import bcrypt from 'bcrypt'
export const registerUser = async (req, res) => {
    const { username, password, firstname, lastname } = req.body;
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new UserModel({ username, password:hashedPassword, firstname, lastname })
    try {
        await newUser.save();
        res.status(201).json({ message: "User registere successfully", newUser })
    }
    catch {
        res.status(400).json({ message: "User registration failed" })
    }
}
//login  
export const loginUser = async (req,res)=>{
    const{username,password}=req.body
    try{
        const user=await UserModel.findOne({username:username})
        if(user){
            const validity = await bcrypt.compare(password,user.password)
            if(validity){
                res.json({message:"Logged in successfully",user})
            }
            else{
                res.status(401).json({message:"Invalid credentials"})
            }
        }
        else{
            res.status(404).json({message:"User not found"})
        }
    }
    catch(error){
        res.status(500).json({message:"Something went wrong"})
    }
}