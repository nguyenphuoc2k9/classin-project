import { v2 as cloudinary } from 'cloudinary';
import UserModel from '../model/user.model.js';
import jwt from "jsonwebtoken"
import { compareSync, genSaltSync, hashSync } from 'bcrypt';
import { SERVER_CONFIG } from '../config.js';
import { CheckNullOrUndefined, verifyEmail } from '../utils/Dataformat.js';
cloudinary.config({
    cloud_name: 'deivlgs7p',
    api_key: '885737281755855',
    api_secret: 'K7vpFXvNq1TWuebCqiq7UpNGXEY'
});

const login = async (req, res) => {
    try {
        console.log(req)
        const { email, password } = req.body
        
        if (email && password) {
            const user = await UserModel.findOne({ email })
            if (user) {
                const compare = compareSync(password, user.password)
                if (compare) {
                    const payload = {
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        picturePath: user.picturePath,
                        friends: user.friends,
                        location: user.location,
                        occupation: user.occupation
                    }

                    const refresh_token = jwt.sign({ _id: user._id }, SERVER_CONFIG.SECRET_KEY, { expiresIn: "7d" })


                    const access_token = jwt.sign(payload, SERVER_CONFIG.SECRET_KEY, { expiresIn: '7d' })
                    delete user.password
                    return res.status(200).json({ access_token, refresh_token, user })
                }
            } else {
                throw new Error("User not found")
            }
        } else {
            throw new Error("Invalid email or password")
        }
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}
const registry = async (req, res) => {
    try {
        if (!CheckNullOrUndefined(req.body)) {
            const {
                firstName,
                lastName,
                email,
                password,
                location,
                occupation,
            } = req.body;

            if (verifyEmail(email)) {
                const findUser = await UserModel.findOne({ email })
                if (!findUser) {
                    const salt = genSaltSync()
                    const hashpassword = hashSync(password, salt)
                    const file = req.file
                    const newData = {
                        firstName,
                        lastName,
                        email,
                        password: hashpassword,
                        friends: [],
                        location,
                        occupation,
                        impressions:0,
                        viewedProfile:0
                    }
                    console.log(file)
                    if (file) {
                        const dataUrl = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
                        const fileName = `${file.originalname.split('.')[0]} ${Math.floor(Math.random() * 1000)}`;
                        cloudinary.uploader.upload(dataUrl, {
                            public_id: fileName,
                            resource_type: "auto"
                        }, (err, result) => {
                            if (result) {
                                newData['picturePath'] = result.secure_url
                                
                                const newUser = new UserModel(newData)
                                newUser.save()
                                console.log(newData)
                                return res.status(200).json(newUser)
                            }
                        })
                    }else{
                        throw new Error("File missing")
                    }

                } else {
                    console.log("user already exists",findUser)
                    throw new Error("user already exists")
                }
            } else {
                console.log("Invalid email")
                throw new Error("Invalid email")
            }
        } else {
            console.log("Invalid body")
            throw new Error("Invalid input")
        }
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}

export const AuthController = {
    login,
    registry
}