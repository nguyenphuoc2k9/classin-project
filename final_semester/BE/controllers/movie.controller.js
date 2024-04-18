import express from "express"
import { SERVER_CONFIG } from "../config/SERVER_CONFIG.js"
import { Data_format, Data_verify } from "../utils/data_format.js"
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
    cloud_name: 'deivlgs7p',
    api_key: '885737281755855',
    api_secret: 'K7vpFXvNq1TWuebCqiq7UpNGXEY'
});

const getAll_Movie = (req, res) => {
    try {
        fetch(SERVER_CONFIG.db_url + "/movie").then((data) => {
            return data.json()
        }).then((data) => {
            return res.send(data)
        }).catch((err) => {
            throw new Error(err.message)
        })
    } catch (e) {
        res.status(400).json({ message: e })
    }

}
const get_Movie = (req, res) => {
    try {
        const { id } = req.params
        fetch(SERVER_CONFIG.db_url + "/movie/" + id).then((data) => {
            return data.json()
        }).then((data) => {
            return res.send(data)
        }).catch((err) => {
            throw new Error(err.message)
        })
    } catch (e) {
        res.status(400).json({ message: e })
    }
}
const update_Movie = async (req, res) => {
    try {
        const { id } = req.params
        if (!Data_verify(req.body)) {
            const body_keys = Object.keys(req.body)
            const file = req.file;
            const update_data = {

            }
            if (file) {
                const dataUrl = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
                const fileName = file.originalname.split('.')[0]
                await cloudinary.uploader.upload(dataUrl, {
                    public_id: fileName + `${Math.random()}`,
                    resource_type: "auto",

                }, (err, result) => {
                    if (result) {
                        update_data['image'] = result.secure_url
                    }

                })
            }
            if (!Data_format(req.body)) {
                for (let i = 0; i < body_keys.length; i++) {
                    console.log(req.body[`${body_keys[i]}`])
                    update_data[`${body_keys[i]}`] = req.body[`${body_keys[i]}`]
                }
                console.log(update_data)
            }
            fetch(SERVER_CONFIG.db_url + '/movie/' + id).then((res) => res.json()).then((data) => {
                if (data.userId == req.user_id) {
                    fetch(SERVER_CONFIG.db_url + "/movie/" + id, {
                        method: "PATCH",
                        body: JSON.stringify(update_data),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((res) => res.json())
                        .then((Data) => {

                            return res.send(Data)
                        })
                        .catch((err) => {
                            throw new Error(err.message)
                        })
                } else {
                    return res.status(401).json({ message: "access denied" })
                }
            }).catch((err) => {
                throw new Error(err.message)
            })

        } else {
            throw new Error("Invalid body")
        }
    } catch (e) {
        return res.status(400).json({ message: e })
    }
}
const delete_Movie = (req, res) => {
    try {
        const { id } = req.params
        fetch(SERVER_CONFIG.db_url +'/movie'+id).then((res)=>res.json()).then((data)=>{
            if(data.userId = req.user_id){
                fetch(SERVER_CONFIG.db_url + "/movie/" + id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((res) => res.json())
                    .then((data) => res.send(data))
                    .catch((err) => { throw new Error(err.message) })
            }else{
                return res.status(401).json("access denied")
            }
        }).catch((Err)=>{
            throw new Error(Err.message)
        })
        
    } catch (e) {
        return res.status(400).json({ message: e })
    }
}
const create_Movie = async (req, res) => {
    try {
        if (!Data_verify(req.body && !Data_format(req.body))) {
            const file = req.file
            const userId = req.user_id
            const { name, introduce, time, year } = req.body
            const data = {
                userId,
                name,

                introduce,
                time,
                year,
                id: `${Math.floor(Math.random() * 1000)}`
            }
            if (!file) {
                throw new Error("No file uploaded")
            }
            const dataUrl = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
            const fileName = file.originalname.split('.')[0];
            await cloudinary.uploader.upload(dataUrl, {
                public_id: fileName,
                resource_type: 'auto',
            }, (err, result) => {
                if (result) {
                    data['image'] = result.secure_url;
                }
            });
            fetch(SERVER_CONFIG.db_url + "/movie/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then((res) => res.json())
                .then((Data) => res.send(Data))
                .catch((err) => { throw new Error(err.message) })
        }
    } catch (e) {
        return res.status(400).json({ message: e })
    }
}
export const MovieController = {
    get_Movie,
    update_Movie,
    delete_Movie,
    create_Movie,
    getAll_Movie
}