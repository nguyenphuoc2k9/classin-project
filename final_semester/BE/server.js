import express from "express"
import { MovieRouter } from "./router/movie.router.js"
import { UserRouter } from "./router/user.router.js"
import {SERVER_CONFIG} from "./config/SERVER_CONFIG.js"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cors())
app.use("/movie",MovieRouter)
app.use("/users",UserRouter)
app.listen(SERVER_CONFIG.PORT,()=>{
    console.log("Listening on port:"+SERVER_CONFIG.PORT)
})