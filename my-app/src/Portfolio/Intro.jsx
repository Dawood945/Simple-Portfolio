import React from 'react'
import codeimage from '../assets/codeimage.svg'
const Intro = () => {
  return (
    <div className='flex justify-center'>
    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-20 gap-y-14 py-20 px-10 max-w-[90vw] items-center'>
        <img src={codeimage} alt="No image" className='w-[340px] mx-auto'/>
        <div className='flex justify-center items-centern'>
        <div className='flex flex-col leading-loose text-justify max-w-[80vw] gap-y-4'>
            <h3 className='text-3xl font-semibold tracking-wider'>Code And Coffee</h3>
            <hr />
            <p className='text-gray-500 text-pretty mt-2'>I'm Dawood, a seasoned web developer with expertise in React and component-based projects. With a year of experience, I've mastered Redux for global state management and wield Axios for seamless data fetching. Let's collaborate and transform your ideas into digital brilliance!</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Intro