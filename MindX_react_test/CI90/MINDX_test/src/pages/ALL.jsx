import React from 'react'
import Bar from "../components/Bar.jsx"
import {useState} from "react"
import { CiTrash } from "react-icons/ci";
import Form from "../components/Form.jsx"
import Details from '../components/Details.jsx';
const ALL = ({input_val,onchangeactive,onclickhandle,onchangehandle,todo}) => {
    
    return (
    <>
        <Bar/>
        <Form onclickhandle={onclickhandle} input_val ={input_val}onchangehandle={onchangehandle}/>
        <Details todo={todo}onchangeactive={onchangeactive}/>
    </>

    
  )
}

export default ALL