import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    authorId:String,
    content:String,
})
const postModel = mongoose.model("posts",postSchema)
export default postModel