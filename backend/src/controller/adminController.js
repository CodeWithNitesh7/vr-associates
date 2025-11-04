import Owner from '../models/owner.js';
import bcrypt from 'bcryptjs';
import jwt from  'jsonwebtoken'

export const adminLogin = async(req,res)=>{
    try {
        const {email,password} = req.body;

        const owner = await Owner.findOne({email});

        if (!owner) {
            return res.status(404).json({msg:"Owner not found"})
        }

        const isMatch = await owner.matchPassword(password)

        if (!isMatch) {
            return res.status(403).json({msg: "Invalid credentials"})
        }

        const token = await jwt.sign({email: owner.email},process.env.JWT_SECRET_KEY,{expiresIn:"10min"})
        res.status(200).json({msg:"Login successfully",
            token,
          owner: {
                
                name: owner.name,
                email: owner.email,
                role: owner.role
            },
         })

    } catch (error) {
        console.log(`Cannot Login`,error);
        res.status(500).json({msg:"Internal server error"})
    }
}


