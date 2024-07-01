import React from 'react'
import Add from '../assets/Add.png'
import quote from '../assets/quote.png'
import play from '../assets/play.png' 
import ellipse from '../assets/Ellipse.png'
import pic from '../assets/pic.png'


const Testimonials = () => {
  return (
    <div>
        <div className='bg-[#F7FDFF] p-[100px]'>
            <div className=' w-[90%] border-2 shadow-sm p-4 space-y-6 mx-auto items-center'>
                <div className='flex space-x-2 items-center'>
                    <button>
                      <img src= {Add} />
                    </button>
                    <span className=' font-bold text-lg'>Add your own</span>
                </div>
                <p>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>     
            </div>
        </div>
        <div className='bg-[#FFFFFF] p-[100px]'>
            <div className=' w-[90%] bg-[#F7F5F9] border-2 shadow-sm p-4 space-y-6 m-auto items-center'>
                <div className='flex space-x-2 items-center'>
                    <img src= {quote} />
                    <span className=' font-bold text-lg'>Testimonials</span>
                </div>
                <p>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
                <div className='space-y-8 flex flex-col xl:flex-row'>
                    <div className='bg-[#CCC1DA] rounded-lg flex items-center p-6'>                        
                        <button className='rounded-full bg-white'>
                            <img src= {play} />
                        </button>
                        <button className='ml-[10px]'>
                            <img src= {ellipse} />
                        </button>
                        <span className='border-2 w-[70%]  h-0 ' ></span>
                        <span className='text-[#8064A2] ml-4 mr-10'>0:00</span>
                        <img  src= {pic} />
                    </div>
                    <div className='items-center  space-x-2 flex mx-auto '>
                        <img src = {pic} />
                        <div>
                            <h1 className='text-[#8064A2] font-semibold'>Shubha Nagarajan</h1>
                            <h1 className='text-[#0096C8] font-semibold'>Classical Dancer</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default Testimonials
