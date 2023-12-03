import React, { useState } from 'react'

const Input = ({userkey,id,lable,onchangehandle}) => {
  return (
    <div className="input-card">
            <label htmlFor={id}>{lable}</label>
            <input type='text' id={id} onChange={(e)=>onchangehandle(e,userkey)}/>
    </div>
  )
}

export default Input