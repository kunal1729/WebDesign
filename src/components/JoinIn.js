import React from 'react'
import google from '../assets/Google.png'
import facebook from '../assets/Facebook.png'

const JoinIn = () => {
  return (
    <div className=' mt-10 mx-auto space-y-6 w-[410px] flex flex-col '>
      <button className='border-[#8064A2] border-2 rounded-lg p-2 font-semibold flex'>
        <img className='w-6' src= {google} />
        <h1 className='ml-28'>Continue with Google</h1>
      </button>
        <button className='border-[#8064A2] border-2 rounded-lg p-2 font-semibold flex'>
            <img className='w-6' src= {facebook} />
            <h1 className='ml-28'>Continue with Facebook</h1>
        </button>
        <h2 className='text-center'>Or Connect With</h2>
        <input className='rounded-lg bg-[#FFFFFF]' placeholder='Email' />
        <input className='rounded-lg bg-[#FFFFFF]' placeholder='Password' />
        
        <label>By continuing, you agree to our <button className='font-bold'> Terms of Service</button> and <button className='font-bold'>Privacy Policy.</button></label>
        
      <button className='bg-[#8064A2] text-white p-2 rounded-lg'>Agree and Continue</button>
    </div>
  )
}

export default JoinIn
