import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
const Skills = () => {
  return (
    <div className='bg-slate-50 pb-28'>
        <div className='flex flex-col gap-y-4 py-20 px-12'>
        <h1 className='text-3xl tracking-wider font-semibold'>Tech Stack</h1>
        <hr />
        </div>

        <div className='flex items-center justify-center'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 max-w-[90vw]'>
            <div className='max-w-[80vw] text-justify gap-y-3'>
                <FaHtml5 className='text-green-600 text-7xl'/>
                <h4 className='font-bold text-lg py-[12px]'>HTML&CSS</h4>
                <p className='text-gray-500'>Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.</p>
            </div>

            <div className='max-w-[80vw] text-justify gap-y-3'>
                <FaJs className='text-green-500 text-7xl'/>
                <h4 className='font-bold text-lg py-[12px]'>JavaScript</h4>
                <p className='text-gray-500'>Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.</p>
            </div>

            <div className='max-w-[80vw] text-justify gap-y-3'>
                <FaReact className='text-green-500 text-7xl'/>
                <h4 className='font-bold text-lg py-[12px] tracking-wider'>React</h4>
                <p className='text-gray-500'>Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.</p>
            </div>
            <div/>
            </div>
        </div>
    </div>
  )
}

export default Skills