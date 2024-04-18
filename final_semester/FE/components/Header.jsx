import React from 'react'
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IconButton } from '@mui/material';
import SideBar from './SideBar.jsx';
import { useDispatch } from 'react-redux';
import { search } from '../src/State/movie.js';
const Header = ({setOpen}) => {
  const dispatch = useDispatch()
  return (
    <div className='header'>
        <SideBar setOpen={setOpen}/>
        <h1>MOVIE </h1>
        <IconButton onClick={()=>dispatch(search(prompt("Enter the movie's name:")))}>
        <CiSearch/>
        </IconButton>
    </div>
  )
}

export default Header