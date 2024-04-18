
import { response } from "express";
import { SERVER_CONFIG } from "../config/SERVER_CONFIG.js"
import { Data_verify, Validate_email } from "../utils/data_format.js"
import jwt from 'jsonwebtoken'
const login = (req, res) => {
    try {
        if (!Data_verify(req.body)) {
            const { username, password } = req.body;
            fetch(SERVER_CONFIG.db_url + '/users').then((response) => response.json()).then((data) => {
                const user = data.find(user => user.username == username)
                if (user) {
                    const id = user.id
                    fetch(SERVER_CONFIG.db_url + '/users/' + id).then((res) => res.json())
                        .then((data) => {
                            if (data.password == password) {
                                const token = jwt.sign(data, SERVER_CONFIG.secret_key, { expiresIn: "1d" })
                                return res.json({ data, token })
                            } else {
                                throw new Error("Invalid password")
                            }
                        }).catch((err)=>{
                            throw new Error(err.message)
                        })
                }else{
                    return res.send({message:"no user found",data})
                }
            })
        }
    } catch (e) {
        res.status(400).json({ message: e })
    }
}

const registry = (req, res) => {
    try {
        if (!Data_verify(req.body)) {
            const { username, password, email } = req.body
            if (Validate_email(email)) {
                const data = {
                    username,
                    password,
                    email,
                    id: `${Math.floor(Math.random() * 1000)}`
                }
                fetch(SERVER_CONFIG.db_url +'/users/',{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    }
                    ,body:JSON.stringify(data)
                }).then((response)=>{
                    return response.json()
                }).then((Data)=>{
                    const token = jwt.sign(Data,SERVER_CONFIG.secret_key ,{expiresIn:"1d"})
                    res.send({token:token,Data})
                }).catch((err)=>{
                    return  res.send(err)
                })

            }else{
                throw new Error("Invalid body")
            }

        } else {
            throw new Error("Invalid body")
        }
    } catch (e) {
        return res.status(400).json({ message: e })
    }
}

export const UserController = {
    login,
    registry
}