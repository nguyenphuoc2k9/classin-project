import React, { useEffect, useState } from 'react'
import { AxiosInstance } from '../../api/axios'
import { useParams } from 'react-router-dom'
import Navbar from '../navbar'
import { Typography } from '@mui/material'
import UserWidget from '../widgets/UserWidget'
import { useMediaQuery } from '@mui/material'
import { Box } from "@mui/material"
import PostWidget from '../widgets/PostWidget'
const Search = () => {
    const [user, setUser] = useState([])
    const [post, setPost] = useState([])
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const querry = new URLSearchParams(window.location.search)
    const Search_Query = async () => {
        console.log(querry.get("search_value"))
        const search_Result = await AxiosInstance.get(`/search?search_value=${querry.get("search_value")}`)
        console.log(search_Result)
        console.log(search_Result.data.post)
        setUser(search_Result.data.user)
        setPost(search_Result.data.post)
    }
    useEffect(() => {
        Search_Query()
    }, [])
    return (
        <Box>
            <Navbar />
            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                flexDirection="column"
                alignItems="center"
                gap="2rem"
                justifyContent="center"
            >
                {post ? <Box  width="60%" flexBasis={isNonMobileScreens ? "42%" : undefined}
                    mt={isNonMobileScreens ? undefined : "2rem"}>
                    {post.map(
                        ({
                            _id,
                            userId,
                            firstName,
                            lastName,
                            description,
                            location,
                            picturePath,
                            userPicturePath,
                            likes,
                            comments,
                        }) => (
                            <PostWidget
                                key={_id}
                                postId={_id}
                                postUserId={userId}
                                name={`${firstName} ${lastName}`}
                                description={description}
                                location={location}
                                picturePath={picturePath}
                                userPicturePath={userPicturePath}
                                likes={likes}
                                comments={comments}
                            />
                        )
                    )}
                </Box > : ""}
                {user ?
                    <Box  width="60%" display="flex" flexDirection="column"gap="10px">
                        {user.map(({ _id, picturePath }) => (
                            <UserWidget userId={_id} picturePath={picturePath} />
                        ))}
                    </Box>
                    :
                    ""
                }
            </Box>
        </Box>
    )
}

export default Search