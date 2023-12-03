import { useState } from 'react'
import './App.css'
import Footer from "./components/Footer.jsx"
import Login from './components/login.jsx'
function App() {
  const [mode, setMode] = useState("login")
  
  return (
    <Login mode={mode} setmode={setMode}/>
  )
}

export default App
