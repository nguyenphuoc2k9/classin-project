import React, { useState } from 'react'
import Input from './input.jsx'
const Form = () => {
    const [user, setuser] = useState({
        name: "",
        password: ""
    })
    const onchangehandle = (e, key) => {
        const value = e.target.value
        const newuser = { ...user, [key]: value }
        setuser(newuser)
    }
    const submithandle = (e) => {
        e.preventDefault()
        console.log('xd');
    }
    return (
        <form className='login-form'>
            
            <Input userkey="name" id='login-name' lable='Name' onchangehandle={onchangehandle} />
            <Input userkey="password" id='login-password' lable='Password' onchangehandle={onchangehandle} />
            <button onClick={submithandle}>Submit</button>
        </form>
    )
}

export default Form