import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends } from "../state/index.js";
import FlexBetween from "./FlexBetween.jsx";
import UserImage from "./UserImage.jsx";
import { AxiosInstance } from "../api/axios.js";
import SettingsIcon from '@mui/icons-material/Settings';
const Friend = ({ friendId, postId,name,isUser, subtitle, userPicturePath,isProfile,handleClickOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  
  const isFriend = friends.find((friend) => friend._id === friendId);
  console.log(isFriend)
  const patchFriend = async () => {
    const response = await AxiosInstance.patch(`users/${_id}/${friendId}`)
    const data = response.data
    dispatch(setFriends({ friends: data }));
  };

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
        >
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      {
        friendId != _id ? <IconButton
        onClick={() => patchFriend()}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
    
      </IconButton> :""
      }
      {isProfile && isUser ? <IconButton onClick={()=>handleClickOpen({postId:postId,type:"post"})}>
        <SettingsIcon/>
      </IconButton> : ""}

    </FlexBetween>
  );
};

export default Friend;
