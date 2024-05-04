import PostModel from "../model/post.model.js"
import UserModel from "../model/user.model.js";
import { CheckNullOrUndefined } from "../utils/Dataformat.js"
import {v2 as cloudinary} from 'cloudinary';
import { compareSync } from "bcrypt";
cloudinary.config({ 
  cloud_name: 'deivlgs7p', 
  api_key: '885737281755855', 
  api_secret: 'K7vpFXvNq1TWuebCqiq7UpNGXEY' 
});

const getAllPost = async(req,res)=>{
    try{    
        const posts = await PostModel.find()
        return res.status(200).json(posts)
    }catch(err){
        return res.status(400).json({message:err.message})
    }
    
}

const getUserPosts = async(req,res)=>{
    try{
        const {userId} = req.params
        if(userId){
            const posts = await PostModel.find({userId:userId})
            return res.status(200).json(posts)
        }
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}
const createPost = async(req,res)=>{
    try{
        console.log(req.body)
        
            const file = req.file
            const userId = req.user_id
            const {description} = req.body
            console.log(userId)
            const user = await UserModel.findById(userId)
            
            if(file){
                const dataUrl = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
                const fileName = `${file.originalname.split('.')[0]}${Math.floor(Math.random()*1000)}`;
                cloudinary.uploader.upload(dataUrl,{
                    public_id:fileName,
                    resource_type:"auto"
                },async (err,result)=>{
                    if(result){
                        const newPost = new PostModel({
                            userId,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            location: user.location,
                            description,
                            userPicturePath: user.picturePath,
                            likes: new Map(),
                            comments: new Map()
                          });
                        newPost.picturePath = result.secure_url
                        await newPost.save()
                        const post = await PostModel.find()
                        return res.status(200).json(post)
                    }
                })
            
            }else{
                const newPost = new PostModel({
                    userId,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    location: user.location,
                    description,
                    userPicturePath: user.picturePath,
                    likes: new Map(),
                    comments: new Map(),
                  });
                  await newPost.save()
                  console.log(newPost)
                  const post = await PostModel.find()
                  return res.status(200).json(post)
            }
    }catch(err){
        return res.status(400).json({messag:err.message})
    }
}
const likePost = async(req,res)=>{
    try{
        const {id} = req.params
        const userId = req.user_id
        const post = await PostModel.findById(id)
        if(post){
            const isliked = post.likes.get(userId)
            if(isliked){
                post.likes.delete(`${userId}`)
            }else{
                post.likes.set(userId, true)
            }
        }else{
            throw new Error("Invalid userId")
        }
        const updatePost = await PostModel.findByIdAndUpdate(id,
        {likes:post.likes},
        {new:true}
        )
        return res.status(200).json(updatePost)
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}
const CreateComment = async(req,res)=>{
    try{
        if(!CheckNullOrUndefined(req.body)){
            const {id} = req.params
            const userId = req.user_id
            const {comment} = req.body
            console.log(id)
            const post = await PostModel.findById(id)
            const user = await UserModel.findById(userId)

            console.log(post)
            if(post){
            post.comments.set(userId,[comment,user])
                await post.save()
                return res.status(200).json(post)
            }else{
                throw new Error("Post not found")
            }
        }
    }catch(e){
        return res.status(400).json({message:e.message})
    }
}
const EditPost = async (req,res)=>{
    try{
        const {password} = req.body
        const {id} = req.params
        if (password && id) {
            const userId = req.user_id
            const user = await UserModel.findById(userId)
            const post = await PostModel.findById(id)
            const compare = compareSync(password, user.password)
            const file = req.file
            console.log(req.body)
            if (compare) {
                delete req.body.password
                    for (let key in req.body) {
                        if (key != "password" && key != "picture") {
                            post[`${key}`] = req.body[`${key}`]
                        }
                }
                if (file) {
                    const dataUrl = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
                    const fileName = `${file.originalname.split('.')[0]}${Math.floor(Math.random() * 1000)}`;
                    cloudinary.uploader.upload(dataUrl,{
                        public_id: fileName,
                        resource_type:"auto"
                    },async (err,result)=>{
                        if(result){
                            post.picturePath = result.secure_url
                            await post.save()
                            return res.status(200).json(post)
                        }
                    })
                } else {
                    await post.save()
                    return res.status(200).json(post)
                }

            } else {
                throw new Error("Authentication failed")
            }
        } else {
            throw new Error("Require authentication")
        }
    }catch(e){
        return res.status(400).json({message:e.message})
    }
}
const DeletePost = async(req,res)=>{
    try{
        const {id} = req.params
        if(id){
            const post = await PostModel.findOneAndDelete({_id:id})
            const posts = await PostModel.find()

            return res.status(200).json(posts)
        }else{
            throw new Error("Invalid post id")
        }
    }catch(E){
        return res.status(400).json({message:E.message})
    }
}
export const PostController = {
    getAllPost,
    DeletePost,
    getUserPosts,
    createPost,
    likePost,
    EditPost,
    CreateComment
}