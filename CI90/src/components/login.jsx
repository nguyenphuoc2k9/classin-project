import React, { useState } from 'react'
import Form from './login/Form'

const Login = ({mode,setmode}) => {
  const switchmode = ()=>{
    if(mode == "login"){
      setmode("signin")
    }else{
      setmode("login")
    }
  }
  console.log(mode);
  return (
    <div id="login">
      <div className="login-box">
          <h1>Login</h1>
          <Form mode={mode}/>
          <h3 onClick={switchmode}> {mode == "login" ? "Sign in": "Login"}</h3>
      </div>
      
    </div>

  )
}

export default Login