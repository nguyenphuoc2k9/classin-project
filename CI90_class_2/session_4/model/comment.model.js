import mongoose from "mongoose";
const commentScheme = mongoose.Schema({
    _id:false,
    id:String,
    postId:String,
    authorId:String,
    content:String,
})
const commentModel = mongoose.model("comments",commentScheme)
export default commentModel