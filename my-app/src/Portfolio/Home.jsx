import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import mobileimg from '../assets/mobileimg.svg'
const Home = () => {
  return (
    <div className="bg-green-100 px-12 py-24">
      <div>
        <div className="items-center flex justify-between max-w-5xl">
          <div className='flex flex-col gap-y-4'>
            <h1 className="text-6xl font-bold">I'm Dawood</h1>
            <h3 className="text-3xl text-gray-700 pt-2">Front-End Developer</h3>
            <p className="text-gray-700 tracking-wider">Turning Ideas into Interactive Reality</p>
            <div className='flex gap-x-4 text-4xl pt-1 text-slate-500'>
                <FaSquareGithub  className='hover:text-black transition duration-500 w-16px h-16px'/>
                <FaLinkedin className='hover:text-black transition duration-500 w-16px h-16px'/>
                <FaTwitterSquare className='hover:text-black transition duration-500 w-16px h-16px'/>
            </div>
        </div>
            <img src={mobileimg} alt="No image" className='w-80 hidden md:flex lg:w-[400px]' />
        </div>
    </div>
    </div>
  )
}

export default Home