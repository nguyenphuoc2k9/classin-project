import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import "./layout.scss"
import Storeinform from '../components/Storeinform'
const LayOutDefault = () => {
  return (
    <div className='layout'>
        <Header/>
        <div className="body-content">
            <div className="content">
                <Storeinform/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default LayOutDefault