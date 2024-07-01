import React from 'react'
import fb from '../assets/fb.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/insta.png'
import pin from '../assets/pin.png'
import google2 from '../assets/google2.png'
import yt from '../assets/yt.png'
import telegram from '../assets/telegram.png'
import mail from '../assets/mail.png'

const Footer = () => {
  return (
    <div>
        <div className='bg-[#FFFFFF] relative p-[100px] mr-12 grid lg:grid-cols-4 grid-cols-1 gap-24'>
            <div className='flex text-sm flex-col'>
                <h1 className='font-bold'>Hobbycue</h1>
                <button className='text-start mt-2'>About Us</button>
                <button className='text-start '>Our Services</button>
                <button className='text-start'>Work with Us</button>
                <button className='text-start'>FAQ</button>
                <button className='text-start'>Contact Us</button>
            </div>
            <div className='flex text-sm flex-col'>
                <h1 className='font-bold'>How Do I</h1>
                <div className='space-y-1 mt-4 flex flex-col'>
                    <button className='text-start mt-2'>Sign Up</button>
                    <button className='text-start '>Add Listing</button>
                    <button className='text-start '>Claim Listing</button>
                    <button className='text-start '>Post a query</button>
                    <button className='text-start '>Add a Blog Post</button>
                    <button className='text-start '>Other queries</button>
                </div>
            </div>
            <div className='flex text-sm flex-col'>
                <h1 className='font-bold'>Quick Links</h1>
                <div className='space-y-1 mt-4 flex flex-col'>
                    <button className='text-start'>Listings</button>
                    <button className='text-start '>Blog Posts</button>
                    <button className='text-start'>Shop/Store</button>
                    <button className='text-start'>Community</button>
                </div>
            </div>
            <div className='space-y-6'>
                <h1 className='font-bold'>Social Media</h1>
                <div className='space-x-4 flex'>
                    <img src = {fb} />
                    <img src = {twitter} />
                    <img src = {insta} />
                    <img src = {pin} />
                    <img src = {google2} />
                    <img src = {yt} />
                    <img src = {telegram} />
                    <img src = {mail} />
                </div>
                <h1 className='font-bold'>Invite Friends</h1>
                <div className='flex mt-[10px] '>            
                    <input placeholder='Enter mail' className=' rounded-lg border-[1px] hover:bg-[#F8F9FA] bg-[#EBEDF0] rounded-r-[8px]' type='text' />
                    <button className=' text-white h-[40px] p-1 bg-purple-800 right-0 top-0 '>
                    Invite
                    </button>
                </div>
            </div>
        </div>
        <footer className='h-[78px] font-semibold text-center p-8 bg-[#F7F5F9]'>
            © Purple Cues Private Limited
        </footer>
    </div>
    
  )
}

export default Footer
