import React from 'react'

const Form = ({onclickhandle, onchangehandle,input_val}) => {
  return (
    <div className="form">
            <input type="text" value={input_val} onChange={(e)=> onchangehandle(e)} placeholder ="add details"/>
            <button onClick={()=> onclickhandle()}>Add</button>
    </div>
  )
}

export default Form