import React from 'react'
import logo from '../assets/logo.png'
import explore from '../assets/Explore.png' 
import hobbies from '../assets/Hobbies.svg'
import bookmark from '../assets/bookmark.png';
import bell from '../assets/bell.png' 
import cart from '../assets/cart.png'
import menu from '../assets/menu.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mt-[10px]  pb-4 shadow-md '>      
      <img className='w-[293.26px] h-[60px] xl:ml-[97px] ml-[22px]' src= {logo} />
      <div className='relative hidden xl:flex ml-8 '>        
        <input className='w-[300px] border-[1px] hover:bg-[#F8F9FA]  bg-[#EBEDF0] rounded-r-[8px] ml-8 mt-[20px] ' type='text' />
        <button className='absolute rounded-r-[8px] h-[40px] p-1 bg-purple-800 right-0 top-5 w-[40px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search mx-auto text-white"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
      </div>
      <div className='xl:mr-[97px] mr-[22px] flex space-x-6 mt-[16px] h-[48px] items-center'>
        <div className='hidden xl:flex'>
            <img src= {explore} alt='e' />
            <h1>Explore</h1>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </button>
        </div>
        <div className='hidden xl:flex'>
            <img src={hobbies} />
            <h1>Hobbies</h1>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </button>
        </div>
        <button className='xl:hidden text-purple-800 inline'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search mx-auto text-white"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button className='inline xl:hidden' >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide text-purple-800 lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button className='hidden xl:inline' >
          <img src= {bookmark} />
        </button>
        <button>
          <img src= {bell} />
        </button>
        <button className='hidden xl:inline'>
          <img src= {cart} />
        </button>
        <button className='p-2 hidden xl:inline text-purple-800 w-[112px] h-[40px] border-2 rounded-lg border-purple-800'>Sign In</button>
        <button>
          <img src= {menu} />
        </button>
      </div>
    </div>
  )
}

export default Navbar
