import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {type:String,required:true},
    lastName: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    picturePath: {type:String,default:""},
    friends: {type:Array,default:[]},
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
    
},{timestamps:true})
UserSchema.index({'$**': 'text'});
const UserModel =  mongoose.model("users", UserSchema)
export default UserModel