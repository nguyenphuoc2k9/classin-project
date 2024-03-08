import mongoose from "mongoose";
const postSchema = mongoose.Schema({
    _id:false,
    id:String,
    authorId:String,
    content:String,
})
const postModel = mongoose.model("posts",postSchema)
export default postModel