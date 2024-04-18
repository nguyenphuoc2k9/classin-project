import jwt from "jsonwebtoken"
import { SERVER_CONFIG } from "../config/SERVER_CONFIG.js";
export const TokenVerify = (req,res,next)=>{
    try{
        const auth = req.headers['authorization'];
        const token = auth.split('Bearer ')[1]
        const tokenVerify = jwt.verify(token,SERVER_CONFIG.secret_key,(err,decode)=>{
            if(err){
                throw new Error("Invalid token")
            }else{
                req.user_id = decode.id
                next()
            }
           
        })
    }catch(e){
        return res.status(401).json({message:e})
    }

}