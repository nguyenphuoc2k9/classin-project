import React from 'react'
import Storeinform from './Storeinform'
import Computerlist from './Computerlist'

const Contentall = () => {
  return (
    <>
    <div>
        <Storeinform/>
    </div>
    <div className="computer-list">
        <Computerlist/>
    </div>
    </>
    
  )
}

export default Contentall