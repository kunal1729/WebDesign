import React from 'react'

import Left from './Left'
import Right from './Right'

const Homescreen = () => {
  return (
    <div className='grid pt-[100px] grid-cols-1 gap-[20px] xl:grid-cols-2 bg-[#F7F5F9] pb-16 '>
        <Left/>
        <Right/>
    </div>
  )
}

export default Homescreen
