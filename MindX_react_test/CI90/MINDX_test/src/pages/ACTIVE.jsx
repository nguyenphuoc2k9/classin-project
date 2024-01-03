import React from 'react'
import Bar from "../components/Bar.jsx"
import {useState} from "react"
import { CiTrash } from "react-icons/ci";
import Form from "../components/Form.jsx"
import Details from '../components/Details.jsx';
const ACTIVE = ({input_val,onchangeactive,onclickhandle,onchangehandle,todo}) => {
  let new_todo = todo.filter(todo =>todo.active == false);
  return (
    <>
        <Bar/>
        <Form onclickhandle={onclickhandle} input_val ={input_val}onchangehandle={onchangehandle}/>
        <Details onchangeactive={onchangeactive} todo={new_todo}/>
    </>
  )
}

export default ACTIVE