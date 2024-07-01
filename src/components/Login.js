import React from 'react'
import google from '../assets/Google.png'
import facebook from '../assets/Facebook.png'

const Login = () => {
  return (
    <div className=' mx-auto space-y-6 w-[410px] flex flex-col m-10 '>
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
        <div className='flex justify-between'>
          <div className='space-x-2'>
            <input type='checkbox' />
            <label>Remember Me</label>
          </div>
          <button>Forget Password?</button>
        </div>
        <button className='border-[#000000] border-2 p-2 rounded-lg'>Continue</button>
        
    </div>
  )
}

export default Login
