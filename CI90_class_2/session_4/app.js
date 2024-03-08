import express from "express"
import mongoose from "mongoose"

const USER = {
    name:"WEB76",
    password:"PHJoqkcYIs8bY1Pt"
}

const CONNECTION_STRING = `mongodb+srv://<${USER.name}>:<${USER.password}>@cluster0.besidzd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
async ()=>{
    await mongoose.connect(CONNECTION_STRING)
    const app = express()
    app.use(express.json())
    app.post("/users/registry",async(req,res)=>{
        try{
            
        }catch(err){

        }
    })
}

