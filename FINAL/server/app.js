import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { UserRouter } from "./routes/userRouter.js"
import { AuthRouter } from "./routes/authRouter.js"
import {SearchRouter} from "./routes/searchRouter.js"
import { PostRouter } from "./routes/postRouter.js"
import mongoose from "mongoose"
import { SERVER_CONFIG } from "./config.js"
dotenv.config()
const connection_url = `mongodb+srv://${SERVER_CONFIG.MONGO_NAME}:${SERVER_CONFIG.MONGO_PASSWORD}@cluster0.besidzd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended : true }));
app.use(express.json())
async function main(){
    await mongoose.connect(connection_url)
    console.log("connected to db")
    app.use("/auth",AuthRouter)
    app.use("/posts",PostRouter)
    app.use("/users",UserRouter)
    app.use("/search",SearchRouter)
    app.listen(SERVER_CONFIG.PORT,()=>{
        console.log("listening on port " + SERVER_CONFIG.PORT)
    })

}
main()