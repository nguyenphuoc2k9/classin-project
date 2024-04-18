import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Registry from './pages/Registry.jsx'
import { useDispatch } from 'react-redux'
import { login } from './State/auth.js'
function App() {
  const dispatch = useDispatch()
  const access_token = JSON.stringify(localStorage.getItem("access_token"))
  if(access_token){
    const user_info = JSON.stringify(localStorage.getItem("user_info"))
    dispatch(login({access_token,data:user_info}))
  }
  return (


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registry' element={<Registry/>}/>
      </Routes>

  )
}

export default App
