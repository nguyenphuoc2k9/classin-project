import React from 'react'

const Input = (id_val,event,key) => {
  return (
    
    <input type='text'id={id_val} onChange={(e)=>event(e,key)}/>
  )
}

export default Input