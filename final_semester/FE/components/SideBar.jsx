import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { IoMenu } from "react-icons/io5";
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from "../src/State/auth.js"
import {Navigate} from "react-router-dom"
function SideBar({setOpen}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const login_state = useSelector((state)=>state.auth.login_state)
  const dispatch = useDispatch()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Logout = ()=>{
    localStorage.removeItem("access_token")
    dispatch(logout())
  }
  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <IoMenu/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>setOpen(true)}>Create</MenuItem>
        <MenuItem onClick={()=>Logout()}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
export default SideBar