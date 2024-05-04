import PostModel from "../model/post.model.js"
import UserModel from "../model/user.model.js"


const search = async(req,res)=>{
    try{
        const {search_value} = req.query
        console.log(req.query)
        if(search_value != ""){
            const user = await UserModel.find({$text: {$search:search_value}})
            const post = await PostModel.find({$text:{$search:search_value}})
            return res.status(200).json({user,post})
        }
    }catch(e){
        return res.status(400).json({message:e.message})
    }

}
export const SearchController ={
    search
}