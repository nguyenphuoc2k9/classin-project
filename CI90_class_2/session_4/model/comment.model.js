import mongoose from "mongoose";
const commentScheme = new mongoose.Schema({
    postId:String,
    authorId:String,
    content:String,
})
const commentModel = mongoose.model("comments",commentScheme)
export default commentModel