import React from 'react'
import HeroImage from '../assets/HeroImage.png'
import {CgArrowRight} from 'react-icons/cg'



const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-900 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row' >
        <div className='flex flex-col justify-center h-full' >
          <h2 className='text-4xl sm:text-6xl font-bold text-white'>Hi..i am front end developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>i'll edit about me..ohwf.</p>
          <div>
            <button>
              portfolio <span><CgArrowRight/> </span>
            </button>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="" className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  )
}

export default Home