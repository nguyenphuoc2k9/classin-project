import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setUser } from "../../state/index.js";
import Navbar from "../navbar/index.jsx";
import FriendListWidget from "../widgets/FriendListWidget.jsx";
import MyPostWidget from "../widgets/MyPostWidget.jsx";
import PostsWidget from "../widgets/PostsWidget.jsx";
import UserWidget from "../widgets/UserWidget.jsx";
import { AxiosInstance } from "../../api/axios.js";
import FormDialog from "../../components/EditForm.jsx";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const [type,setType] = useState({})
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [open, setOpen] = useState(false);
  const handleClickOpen = (e) => {
    setOpen(true);
    if(e =="user"){
      setType({...type,type:e})
    }else{
      setType({postId:e.postId,type:e.type})
    }
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  const getUser = async () => {
    const response = await AxiosInstance.get(`/users/${userId}`)
    const data = response.data
    setUser(data);
  };

  useEffect(() => {
    getUser();
    
  }, [])

  if (!user) return null;

  return (
    <Box>
      <FormDialog open={open} type={type} setUser={setUser} user={user}handleClose={handleClose}/>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget  userId={userId} picturePath={user.picturePath} handleClickOpen={handleClickOpen}/>
          <Box m="2rem 0" />
          <FriendListWidget userId={userId} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <PostsWidget handleClickOpen={handleClickOpen} userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
