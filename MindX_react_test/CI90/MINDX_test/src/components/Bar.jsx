import React from 'react'
import { NavLink } from 'react-router-dom'
const Bar = () => {
  const activeClass = (params)=>{
    return params.isActive ? "active" : ""
  }
  return (
    <div className='header'>
            <NavLink to="/" className={activeClass}>All</NavLink>
            <NavLink to="/active" className={activeClass}>Active</NavLink>
            <NavLink to='/complete' className={activeClass}>Complete</NavLink>
    </div>
  )
}

export default Bar