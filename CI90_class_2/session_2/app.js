import express from "express"
import {users,posts} from "./data.js"
import {v4} from "uuid"
const app = express()
const port = 8080
const verify = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
app.use(express.json())
app.get("/users/:userId",(req,res)=>{
    const {userId} = req.params;
    const user = users.find(user=>user.id==userId)
    if(!user){
        return res
            .status(404)
            .json({
                message:"User not found",
                success:false,
                data:null
            })
        
    }
    return res
            .status(200)
            .json(user)
})
app.post("/users/", (req,res)=>{
    const {email,username,avatar} = req.body
    const uuid = v4()
    if(new RegExp(verify).test(email)){
        const newUser = {
            email:email,
            id: uuid,
            name:username,
            avatar:avatar,
        }
        users.push(newUser)
        res.status(200).json(newUser)
    }else{
        res.status(404).json("Invalid email address.")
    }
})
app.get("/posts/:userId",(req,res)=>{
    const {userId}= req.params 
    const post = posts.find(post=>post.userId == userId)
    if(!post){
        return res
                .status(404)
                .json("User haven't created a post yet.")

    }
    return res
            .status(200)
            .json(post)
})
app.post("/posts/:userId",async (req,res)=>{
    const {userId} = req.params
    const {content,createAt,isPublic} = req.body
    const uuid= v4()
    const user = users.find(user=>user.id===userId)
    if(user){
        const newpost = {
            content:content,
            createAt:createAt,
            isPublic:isPublic,
            postId:uuid,
            userId:userId
        }
        posts.push(newpost)
        return res.status(200).json(newpost)
    }else{
        return res.status(404).json("invalid user Id")

    }
})
app.put("/posts/:postId",(req,res)=>{
    const {postId} = req.params
    const {content,isPublic,createAt,userId} = req.body
    const post = posts.findIndex(post=>post.postId === postId)
    if(post != -1){
        if(userId===posts[post].userId){
            const post_data ={
                content:content,
                isPublic:isPublic,
                createAt:createAt
            }
            const post_key = Object.keys(post_data)
            for(let i =0;i<post_key.length;i++){
                posts[post][`${post_key[i]}`]=post_data[`${post_key[i]}`]
            }
            return res.status(200).json(posts[post])
        }else{
            res.status(404).json("This user is not allowed to alter this post")
        }
    }else{
        res.status(404).json("post not found")
    }
})
app.delete("/post/:postId/user/:userId",(req,res)=>{
    const {postId,userId}= req.params
    console.log(userId)
    const post = posts.findIndex(post=>post.postId==postId)
    if(posts[post]){
        if(posts[post].userId == userId){
            posts.splice(post,1)
            return res.status(200).json(posts[post])
        }
        return res.status(404).json("User not allowed to delete this post")
    }
    return res.status(404).json("Post not found")
})
app.get("/post/",(req,res)=>{
    const {content}= req.query
    const post_public = posts.filter(post=>post.isPublic==true)
    console.log(posts)
    if(content != null && content != '' &&content != undefined){
        console.log("searching")
        const search_query = posts.filter(post=>post.content == content)
        if(search_query){
            return res.status(200).json(search_query)
        }
        return res.status(404).json("posts not found")
    }else{
        console.log(post_public)
        if(post_public.length !=0){
        return res.status(200).json(post_public)
    }
    return res.status(404).json("No post is currently public")
    }

})
app.listen(port,()=>{
    console.log(`listening on post ${port}`)
})