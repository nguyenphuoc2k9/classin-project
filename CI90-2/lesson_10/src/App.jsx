import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grand from './components/Grand'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Grand/>
    </>
  )
}

export default App
