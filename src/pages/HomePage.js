import React from 'react';
import Navbar from '../components/Navbar';
import Homescreen from '../components/Homescreen';
import Explore from '../components/Explore';
import Testimonials from '../components/Testimonials';
import End from '../components/End';
import Footer from '../components/Footer';

const HomePage = () => {

  return (
      <div className='w-full'>
        <Navbar/>
        <Homescreen/>
        <Explore />
        <Testimonials/>
        <End/>
        <Footer/>
      </div>
  )
}

export default HomePage;
