import React from 'react'
import Bar from "../components/Bar.jsx"
import {useState} from "react"
import { CiTrash } from "react-icons/ci";
import Form from "../components/Form.jsx"
import Details from '../components/Details.jsx';
import Complete from '../components/Complete.jsx';
const COMPLETED = ({todo,delete_all,delete_one}) => {
    let new_arr = todo.filter(e=> e.active == true)
  return (
    <>
    <Bar/>
    {
        new_arr.length != 0 ? <Complete todo={new_arr}delete_all={delete_all} delete_one ={delete_one}/> : ""
    }
    </>
    
  )
}

export default COMPLETED