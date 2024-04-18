import express from "express"
import mongoose from "mongoose"
import ValidateBody from "./utils/ValidateBody.js"
import UNACCEPTABLE from "./Errors/UNACCEPTABLE.js"
import userModel from "./model/user.model.js"
const USER = {
    name:"WEB76",
    password:"v4o7xTMbPdmDUEuE"
}

const CONNECTION_STRING = `mongodb+srv://${USER.name}:${USER.password}@cluster0.besidzd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
console.log(CONNECTION_STRING)
async function main  (){
    await mongoose.connect(CONNECTION_STRING)
    console.log("connected")
    const app = express()
    app.use(express.json())
    app.post("/users/registry/",async (req,res)=>{
        try{
            if(ValidateBody(req.body)){
                throw new UNACCEPTABLE()
            }
            const {name} = req.body
            const newUser = await userModel.create({
                name
            })
            res.status(200).json(newUser)
        }catch(err){
            res.status(err.status).json(err.message)
        }
    })
    app.listen(8080,()=>{
    
    })
}

main()
