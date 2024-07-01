import React from 'react'
import G27 from '../assets/Group27.png'

const Left = () => {
  return (
    <div >
      <div className=' w-[80%] ml-[100px] space-y-8'>
        <h1 className='font-bold italic text-[36px] '>Explore your <span className='text-[#0096C8]'>hobby</span > or <span className=' text-[#8064A2]' >passion</span></h1>
        <p>
            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
        </p>
        <p>
            If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
        </p>
        <img className='w-[697.07px] h-[216px] ' src= {G27} />
      </div>
    </div>
  )
}

export default Left
