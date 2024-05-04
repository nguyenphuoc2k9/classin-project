import { CheckNullOrUndefined } from "../utils/Dataformat.js"
import UserModel from "../model/user.model.js"
import mongoose, { Mongoose } from "mongoose"
import { compareSync } from "bcrypt"
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'deivlgs7p',
    api_key: '885737281755855',
    api_secret: 'K7vpFXvNq1TWuebCqiq7UpNGXEY'
});

const getUser = async (req, res) => {
    try {
        const { id } = req.params
        if (id) {
            const user = await UserModel.findById(id)
            if (user) {
                res.status(200).json(user)
            } else {
                throw new Error("User not found")
            }
        } else {
            throw new Error("Bad request")
        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params
        if (id) {
            const user = await UserModel.findById(id)
            if (user) {
                const friends = await Promise.all(user.friends.map(friendId => UserModel.findById(friendId)))
                const formattedFriends = friends.map(({ _id, firstName, lastName, occupation, location, picturePath }) => {
                    return { _id, firstName, lastName, occupation, location, picturePath };
                })
                res.status(200).json(formattedFriends)
            } else {
                throw new Error("User not found")
            }

        } else {
            throw new Error("invalid Id")
        }
    } catch (Err) {
        res.status(400).json({ message: Err.message })
    }
}
const editFriendList = async (req, res) => {
    try {
        const { id, friendId } = req.params
        if (id && friendId) {
            const user = await UserModel.findById(id);
            const friend = await UserModel.findById(friendId)
            console.log(user.friends.includes(friendId))
            if (user.friends.includes(friendId)) {
                user.friends = user.friends.filter((id) => id !== friendId);
                friend.friends = friend.friends.filter((id) => id !== id);
            } else {
                user.friends.push(friendId);
                friend.friends.push(id);
            }
            await user.save();
            await friend.save();

            const friends = await Promise.all(
                user.friends.map((id) => UserModel.findById(id))
            );
            const formattedFriends = friends.map(
                ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                    return { _id, firstName, lastName, occupation, location, picturePath };
                }
            );

            res.status(200).json(formattedFriends);
        } else {
            throw new Error("Invalid Id or friendId")
        }
    } catch (Err) {
        return res.status(404).json({ message: Err.message })
    }
}
const EditUser = async (req, res) => {
    try {
        const { password } = req.body
        if (password) {
            const userId = req.user_id
            const user = await UserModel.findById(userId)
            const compare = compareSync(password, user.password)
            const file = req.file
            if (compare) {
                delete req.body.password
                    for (let key in req.body) {
                        console.log(key)
                        if (key != "password" && key != "picture") {
                            user[`${key}`] = req.body[`${key}`]
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
                            user.picturePath = result.secure_url
                            await user.save()
                            return res.status(200).json(user)
                        }
                    })
                } else {
                    await user.save()
                    return res.status(200).json(user)
                }

            } else {
                throw new Error("Authentication failed")
            }
        } else {
            throw new Error("Require authentication")
        }

    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}
export const UserController = {
    getUser,
    EditUser,
    getUserFriends,
    editFriendList
}