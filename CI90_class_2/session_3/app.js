import PORT from "./config.js";
import express from "express"

const data = {
    "users": [
        {
            "id": "US001",
            "userName": "MindX"
        },
        {
            "id": "US002",
            "useName": "Nobi Nobita"
        }
    ],
    "posts": [
        {
            "id": "PS001",
            "content": "Nội dung học về JSON Server!",
            "authorId": "US001"
        },
        {
            "id": "PS002",
            "content": "Nội dung học về JSON Server!",
            "authorId": "US001"
        }
    ],
    "comments": [
        {
            "id": "CMT001",
            "postId": "PS001",
            "content": "Bài học này rất ý nghĩa! Cảm ơn MindX!",
            "authorId": "US002"
        },
        {
            "id": "CMT001",
            "postId": "PS001",
            "content": "Bài học này rất ý nghĩa! Cảm ơn MindX!",
            "authorId": "US002"
        },
        {
            "id": "CMT001",
            "postId": "PS001",
            "content": "Bài học này rất ý nghĩa! Cảm ơn MindX!",
            "authorId": "US002"
        },
        {
            "id": "CMT001",
            "postId": "PS001",
            "content": "Bài học này rất ý nghĩa! Cảm ơn MindX!",
            "authorId": "US002"
        }
    ]
}
const app = express()
app.use(express.json())
//Viết API việc đăng ký user với userName, id sẽ được là một string ngẫu nhiên, không được phép trùng, bắt đầu từ ký tự US (ví dụ: US8823).

app.post("/user/",(req,res)=>{
    try{
        if(!validatebody(req.body)){
            throw new Error("Invalid body data")
        }
        
        const id = `US${IdGenerator()}`
        const {UserName} = req.body
        const new_user = {
            id,
            UserName
        }
        data["users"].push(new_user)
        return res.status(201).json(new_user)
    }catch(err){
        console.log(err)
        return res.status(406).send(err)
    }
})
//Viết API cho phép user tạo bài post (thêm bài post, xử lý id tương tự user).

app.post("/post/",(req,res)=>{
    try{
        if(!validatebody(req.body)){
            throw new Error("Invalid body data")
        }
        const id=`PS${IdGenerator()}`
        const {content,authorId} = req.body
        const new_post = {
            id,
            content,
            authorId
        }
        data["posts"].push(new_post)
        return res.status(201).json(new_post)
    }catch(err){
        return res.status(406).send(err)
    }
})

//Viết API cho phép user chỉnh sửa lại bài post (chỉ user tạo bài viết mới được phép chỉnh sửa).

app.patch("/post/:postId" ,(req,res)=>{
    try{
        if(!validatebody(req.body)){
            throw new Error("Invalid body data")
        }
        const {authorId,content} = req.body
        const {postId }=req.params
        const post_index = data["posts"].findIndex(post=>post.id==postId)
        if(post_index ==-1){
            return res.status(404).send("Post not found")
        }
        if(authorId != data["posts"][post_index]["authorId"]){
            return res.status(401).send("You are not allowed to alter this post")
        }
        data["posts"][post_index]["content"] = content
        return res.status(202).json(data["posts"][post_index])
    }catch(err){
        return res.status(406).send(err)
    }
}) 

//Viết API cho phép user được comment vào bài post

app.post("/comments/:postId",(req,res)=>{
    try{
        if(!validatebody(req.body)){
            throw new Error("Invalid body data")

        }
        const id = `CMT${IdGenerator()}`
        const {postId} = req.params
        const {authorId,content} = req.body
        const validate_user = data["users"].find(user=>user.id==authorId)
        const post_index = data["posts"].findIndex(post=>post.id==postId)
        if(!validate_user){
            return res.status(404).send("user not found")
        }
        if(post_index ==-1){
            return res.status(404).send("post not found")
        }
        
        const new_comment = {
            id,
            postId,
            authorId,
            content,
        }
        data["comments"].push(new_comment)
        return res.status(201).json(new_comment)
    }catch(err){
        return res.status(406).send(err)
    }
    
})

//Viết API cho phép user chỉnh sửa comment (chỉ user tạo comment mới được sửa)

app.patch("/comments/:Id",(req,res)=>{
    try{
        if(!validatebody(req.body)){
            throw new Error("Invalid body data")
        }
        const {Id} = req.params
        const {content,authorId} = req.body
        const comment_index = data["comments"].findIndex(com=>com.id===Id)
        if(comment_index ==-1){
            return res.status(404).send("comment not found")
        }
        if(data["comments"][comment_index].authorId!=authorId){
            return res.status(401).send("You are not allowed to alter this post")
        }
        data["comments"][comment_index].content = content
        return res.status(200).send("Success")
    }catch(err){
        return res.status(406).send(err)
    }
})

//Viết API lấy tất cả comment của một bài post.

app.get("/comments/:postId",(req,res)=>{
    const {postId} = req.params
    const comments = data["comments"].filter(com=>com.postId ==postId)
    if(!comments){
        return res.status(404).send("No comments found!")
    }
    return res.status(404).json(comments)
})

//Viết API lấy tất cả các bài post, 3 comment đầu (dựa theo index) của tất cả user .

app.get("/post/",(req,res)=>{
    let send_data = []
    for(let i  =0;i<data["posts"].length;i++){
        const comment_of_current_post = data["comments"].filter(com=>com.postId === data["posts"][i].id)
        data["posts"][i]["comments"]=[]
        if(comment_of_current_post.length >=3){
            for(let x =0;x<3;x++){
                data["posts"][i]["comments"].push(comment_of_current_post[x])
            }
        }else{
            data["posts"][i]["comments"] = comment_of_current_post
        }
        send_data.push(data["posts"][i])
    }
    res.status(200).json(send_data)
})

//Viết API lấy một bài post và tất cả comment của bài post đó thông qua postId

app.get("/all/",(req,res)=>{
    let send_data = []
    for(let i  =0;i<data["posts"].length;i++){
        const comment_of_current_post = data["comments"].filter(com=>com.postId === data["posts"][i].id)
        data["posts"][i]["comments"]=comment_of_current_post
        
        send_data.push(data["posts"][i])
    }
    res.status(200).json(send_data)
})
app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})










































const validatebody = (body)=>{
    const keys = Object.keys(body)
    for(let i=0;i<keys.length;i++){
        if(body[`${keys[i]}`] == undefined || body[`${keys[i]}`] == null || body[`${keys[i]}`]==""){
            console.log(body[keys[i]])
            return false
        }

    }
    return true
}
const IdGenerator = ()=>{
    return Math.floor(Math.random()*1000)
}
