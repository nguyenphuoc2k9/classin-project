import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    _id:false,
    id:String,
    name:String
})
const userModel= mongoose.model("users",userSchema)
export default userModel;