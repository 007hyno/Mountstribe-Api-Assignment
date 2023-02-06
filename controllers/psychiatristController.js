import {register,login} from "../models/psychiatrist.js";
import bcrypt from "bcrypt"

export const registerPsy = async (req,res)=>{
    try{
        const data = await register(req.body)
        res.status(200).json({msg:"successfully psy registered"})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export const loginPsy = async (req,res)=>{
    try{
        console.log(req.body.email);
        const data = await login(req.body);
        if(!data.status){
            res.status(500).json({error:"user not found"})
        }
        if(data.status){
            //password checking
            if (!bcrypt.compare(req.body.password, data.data[0].password)) {
                return res.status(400).json({
                  error: 'Email and password do not match'
                });
              }
                console.log("🎈🎈🎈lesgOOOO!!🎈🎈🎈");
                // process.env.JWT_SECRET
                const token = jwt.sign({
                    email: data.data[0].email,
                    id: data.data[0].id
                  }, process.env.JWT_SECRET, {
                    expiresIn: '1h'
                  });
                  res.status(200).json({message :data.data,
                  token:token
                  });
        }
    }catch(err){
        console.log("🎆🎆");
        res.status(500).json({error:err.message})
    }
}


