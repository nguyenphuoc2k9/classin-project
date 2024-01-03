import React from 'react'
import { CiTrash } from "react-icons/ci";
import Details_card from './card/Details_card';
const Details = ({todo,onchangeactive}) => {
    console.log(todo);
  return (
    <div className="details">
            {
                todo.map((element)=>(
                    <Details_card key={element.id} element={element} onchangeactive={onchangeactive}/>
                ))
            }
    </div>
  )
}

export default Details