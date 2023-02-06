import {register} from "../models/patient.js";

const registerPaitient = async (req,res)=>{
    try{
        const data = await register(req.body)
        res.status(200).json({msg:"successfully Paitient registered"})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export default registerPaitient;

