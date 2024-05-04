import React from 'react'
import {Box,Avatar,Typography} from "@mui/material"
import { useNavigate } from 'react-router-dom'
const Comment = ({user,comment}) => {
    const navigate = useNavigate()
    const handleAvatarOnClick = (id)=>{
        navigate(`/profile/${id}`)
        navigate(0)
    }
  return (
    <Box display="flex" alignItems="center" gap="10px" sx={{mt:2}}>
        <Avatar src={user.picturePath} onClick ={()=>handleAvatarOnClick(user._id)}/>
        <Box display="flex" flexDirection="column" gap="5px">
            <Typography variant='h5'>{user.firstName} {user.lastName}</Typography>
            <Typography>{comment}</Typography>
        </Box>
    </Box>
  )
}

export default Comment