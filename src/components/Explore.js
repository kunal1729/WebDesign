import React from 'react'
import people from '../assets/people.svg'
import location from '../assets/location.svg'
import product from '../assets/product.svg'
import program from '../assets/program.svg'

const Explore = () => {
  return (
    <div className='p-[100px] grid grid-cols-1 xl:grid-cols-2 gap-6'>
      <div className=' hover:bg-[#8064A2] hover:text-white  space-y-6 w-[90%] border-2 shadow-sm p-8 rounded-lg'>
        <div className='flex items-center space-x-3'>
          <img fill = "white" src={people}></img>
          <h1 className='font-bold text-lg'>People</h1>
        </div>
        <p className='text-lg' >
            Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.
        </p>
        <button className='border-2 p-2  w-[122px] rounded-lg border-black '>Connect</button>
      </div>
      <div className=' hover:bg-[#77933C] w-[90%] space-y-6 border-2 shadow-sm p-8 rounded-lg'>
        <div className='flex items-center space-x-3'>
          <img src={location}></img>
          <h1 className='font-bold text-lg'>Place</h1>
        </div>
        <p className='text-lg' >
          Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.
        </p>
        <button className='border-2 p-2  w-[122px]  rounded-lg border-black '>Connect</button>
      </div>
      <div className='hover:bg-[#C0504D] space-y-6 w-[90%] border-2 shadow-sm p-8 rounded-lg'>
        <div className='flex items-center space-x-3'>
          <img src={product}></img>
          <h1 className='font-bold text-lg'>Product</h1>
        </div>
        <p className='text-lg' >
          Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.
        </p>
        <button className='border-2 p-2  w-[122px]  rounded-lg border-black '>Connect</button>
      </div>
      <div className=' hover:bg-[#0096C8] space-y-6 w-[90%] border-2 shadow-sm p-8 rounded-lg'>
        <div className='flex items-center space-x-3'>
          <img src={program}></img>
          <h1 className='font-bold text-lg'>Program</h1>
        </div>
        <p className='text-lg' >
          Find events, meetups and workshops related to your hobby. Register or buy tickets online.
        </p>
        <button className='border-2 p-2  w-[122px] h-[40px] rounded-lg border-black '>Connect</button>
      </div>
    </div>
  )
}

export default Explore

