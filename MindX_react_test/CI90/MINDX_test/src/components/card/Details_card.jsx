import React from 'react'
import { CiTrash } from "react-icons/ci";
const Details_card = ({element,onchangeactive}) => {
  return (
    <div className="card">
    <div className="info">
        {element.active ? <input type="checkbox" checked onChange={(e)=> onchangeactive(e.target.value,element.id)}/> : <input type="checkbox" value='false' onChange={(e)=> onchangeactive(e.target.value,element.id)}/>}
        <h3 className={element.active ? "com" : ""}>{element.task}</h3>
</div>
</div>
  )
}

export default Details_card