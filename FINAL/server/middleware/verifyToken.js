import jwt from "jsonwebtoken"
import {SERVER_CONFIG} from"../config.js"
export const VerifyToken = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split('Bearer ')[1]
        const verify = jwt.verify(token,SERVER_CONFIG.SECRET_KEY,(err,encoded)=>{
            if(err){
                return res.status(401).json("Token unavailable")
            }else{
                req.user_id = encoded._id
                console.log("success")
                next()
            }
        })
    }catch(e){
        return res.status(400).json({message:e.message})
    }
}