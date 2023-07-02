import React from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
const NavBar = () => {
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed '>
        <div>
            <h1 className="text-5xl font-name ml-2">Bala Venkat</h1>
        </div>

        <ul className="hidden md:flex">
            <li className="px-8 cursor-pointer font-medium text-gray-500 hover:scale-125 duration-200">Home</li>
            <li className="px-8 cursor-pointer font-medium text-gray-500 hover:scale-125 duration-200">About</li>
            <li className="px-8 cursor-pointer font-medium text-gray-500 hover:scale-125 duration-200">Experiences</li>
            <li className="px-8 cursor-pointer font-medium text-gray-500 hover:scale-125 duration-200">Contact</li>
            <li className="px-8 cursor-pointer font-medium text-gray-500 hover:scale-125 duration-200">Cv</li>
        </ul>
    </div>
  )
}

export default NavBar