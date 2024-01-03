import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LayOutDefault from './layouts/LayOutDefault'
import Contentall from './components/Contentall'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<LayOutDefault/>}>
          <Route index element={<Contentall/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
