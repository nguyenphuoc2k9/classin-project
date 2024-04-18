import { IconButton } from '@mui/material';
import React from 'react'
import { CiEdit } from "react-icons/ci";
import { FaPlayCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { Navigate } from 'react-router-dom';
import { AxiosInstance } from '../src/api/axios';
const Detail = ({ name, time, introduce, year, image, userId, closeDetail ,id}) => {
    const user = JSON.parse(localStorage.getItem("user_info"))
    const permit = user.id == userId
    console.log(permit)
    const edit_movie = async(type) => {
        if (permit) {
            const input_data = prompt(`Enter your new ${type} data:`)
            const update_data = {}
            update_data[`${type}`]=input_data
            const update = await AxiosInstance.patch("movie/edit/"+id,update_data)
            console.log(update)
        }
    }
    const edit_image = async(file)=>{
        if(permit){
            console.log(file)
            const update = await AxiosInstance.patch("movie/edit/"+id,{
                file:file
            }, {headers: {'Content-Type': 'multipart/form-data'}})
            console.log(update)
        }
    }
    return (

        <div className="detail">
            <div className="detail-box">
                <IconButton className='close-button' onClick={() => closeDetail()}>
                    <FaRegCircleXmark />
                </IconButton>
                <div className="image">
                    <img src={image} alt="image" />

                </div>
                <div className="content">
                    <div className="content-card.inside">
                        <div className='inside'>
                            <h1>{name}</h1>
                            {permit == true ? <IconButton onClick={() => edit_movie("name")}>
                                <CiEdit />
                            </IconButton> : ""}

                        </div>
                        <div className="inside">
                            <p>{time} min{permit == true ? <IconButton onClick={() => edit_movie("min")}>
                                <CiEdit />
                            </IconButton> : ""} {year}{permit == true ? <IconButton onClick={() => edit_movie("year")}>
                                <CiEdit />
                            </IconButton> : ""}</p>

                        </div>
                    </div>
                    <div className="content-card">
                        <h2>{introduce}</h2>
                        {permit == true ? <IconButton onClick={() => edit_movie("introduce")}>
                            <CiEdit />
                        </IconButton> : ""}
                    </div>
                    {permit == true ? <input type="file" onChange={(e)=> edit_image(e.target.files[0])}/> : ""}
                    <div className="content-card">
                        <button className='play-button'><FaPlayCircle />Play movie</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Detail