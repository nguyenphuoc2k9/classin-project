import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, InputBase, Typography, useTheme,Avatar } from "@mui/material";
import FlexBetween from "../../components/FlexBetween.jsx";
import Friend from "../../components/Friend.jsx";
import WidgetWrapper from "../../components/WidgetWrapper.jsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../state/index.js";
import { Axios } from "axios";
import { AxiosInstance } from "../../api/axios.js";
import { useNavigate } from "react-router-dom";
import Comment from "../../components/Comment.jsx"
const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
  isProfile,
  handleClickOpen
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;
  const [comment_val,setCommentVal] = useState("")
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;
  const comments_keys = Object.keys(comments)
  const handleKeyDown = async(event)=>{
    if(event.keyCode === 13){
      if(!(loggedInUserId in comments)){
        const response = await AxiosInstance.patch(`/posts/${postId}/comment`,{comment:comment_val}) 
        const updatedPost = response.data
        dispatch(setPost({post:updatedPost}))
      }
      }
  }
  const patchLike = async () => {
    const response = await AxiosInstance.patch(`/posts/${postId}/like`,{userId:loggedInUserId},{
      headers: {'Content-Type': 'application/json'}
    })
    const updatedPost = response.data
    dispatch(setPost({ post: updatedPost }));
  };
  const handleAvatarOnClick = (key)=>{
      navigate(`/profile/${key}`)
      navigate(0)
  }
  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        postId={postId}
        isProfile ={isProfile}
        isUser = {postUserId == loggedInUserId}
        handleClickOpen={handleClickOpen}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={picturePath}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments_keys.length}</Typography>
          </FlexBetween>
        </FlexBetween>
      </FlexBetween>
      {isComments && (
        <Box mt="0.5rem">
          <InputBase fullWidth={true} placeholder="Say something..." onKeyDown={handleKeyDown} onChange={(e)=> setCommentVal(e.target.value)}/>
          <Divider/>
          {comments_keys.map((key,i) => (
            <Comment key={key} comment={comments[`${key}`][0]} user={comments[`${key}`][1]}/>
          ))}

        </Box>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;
