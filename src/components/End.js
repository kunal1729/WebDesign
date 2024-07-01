import React from 'react'
import Group from '../assets/Group.png'
import pic2 from '../assets/pic2.png' 

const End = () => {
  return (
    <div className='bg-[#F7FDFF] p-[100px] space-y-4 flex flex-col'>
      <h1 className='font-bold italic text-[36px] '>Your <span className=' text-[#8064A2]'>Hobby,</span > Your  <span className='text-[#0096C8] ' > Community...</span></h1>
      <button className='text-white bg-[#8064A2] w-[147px] p-1 rounded-lg'>Get started</button>
      <div className='items-center space-x-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
          <img src= {Group} />
          <img src = {pic2} />            
      </div>
    </div>
  )
}

export default End
