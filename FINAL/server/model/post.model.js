import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    firstName: {type: String,required: true},
    lastName: {type:String,required:true},
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    comments: {
      type:Map,
      of: Array
    },
    likes: {
      type: Map,
      of: Boolean,
    }
},{timestamps:true})
PostSchema.index({'$**': 'text'});
const PostModel = mongoose.model("posts",PostSchema)
export default PostModel