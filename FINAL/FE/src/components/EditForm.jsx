import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Dropzone from "react-dropzone";
import FlexBetween from './FlexBetween.jsx';
import { setPost,setPosts } from '../state/index.js';
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import { AxiosInstance } from '../api/axios.js';
import { useDispatch } from 'react-redux';
export default function FormDialog({open,user,type,setUser,handleClose}) {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [image, setImage] = React.useState(null);
  const { palette } = useTheme();
  const dispatch = useDispatch()
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;
  const handleDeletePost = async ()=>{
    const response = await AxiosInstance.delete(`/posts/${type.postId}/delete`)
    const data =response.data
    dispatch(setPosts({posts:data}))
    handleClose()
  }
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: async (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            if(image){
              formData.set('picture',image)
            }
            const formJson = Object.fromEntries(formData.entries());
            for(let formKey in formJson){
              if(formJson[`${formKey}`] ==""){
                formData.delete(`${formKey}`)
              }
            }
            
            const password = String(prompt("Enter your passwor before making changes :"))
            formData.set(`password`,password)
            if(type.type=="user"){
              const response = await AxiosInstance.patch("/users/patch",formData,{headers:{"Content-Type":"multipart/form-data"}})
              const data = response.data
              console.log(data)
              setUser(data)
            }else{
              
              const response = await AxiosInstance.patch(`/posts/${type.postId}/patch`,formData,{headers:{"Content-Type":"multipart/form-data"}})
              const data = response.data
              dispatch(setPost({post:data}))
            }
            handleClose();
          },
        }}
      >
        <DialogTitle>Change Your Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Change your information quickly and easily
          </DialogContentText>
          {type.type=="user" 
            ?<>
            <TextField
            autoFocus
            

            margin="dense"
            id="name"
            name="firstName"
            label="First Name"
            type="firstName"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            

            margin="dense"
            id="name"
            name="lastName"
            label="Last Name"
            type="lastName"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            
            margin="dense"
            id="name"

            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            

            margin="dense"
            id="name"
            name="location"
            label="Location"
            type="location"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            
            margin="dense"

            id="name"
            name="occupation"
            label="Occupation"
            type="occupation"
            fullWidth
            variant="standard"
          />
          <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  width="100%"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: "15%" }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box></> :
            <>
              <TextField
            autoFocus
            
            margin="dense"

            id="name"
            name="description"
            label="Description"
            type="description"
            fullWidth
            variant="standard"
          />
          <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  width="100%"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: "15%" }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
            </>
        }
          
        </DialogContent>
        <DialogActions>
          {type.type=="post"? <Button onClick={handleDeletePost}>Delete</Button>:""}
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}