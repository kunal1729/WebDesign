import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Right = () => {
  return (
    <div className=' mx-auto space-y-6 w-[410px] flex flex-col '>
        <div className='space-x-6 font-semibold text-lg '>
            <NavLink to={'./'} className='text-[#8064A2] '>Sign In</NavLink>
            <NavLink to={'./JoinIn'} className='text-[#8064A2]'>Join In</NavLink>
            <Outlet/>
        </div>        
        
    </div>
  )
}

export default Right
