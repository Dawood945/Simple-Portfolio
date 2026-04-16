import React from 'react'
import red from '../assets/redux-toolkit.png'
import tour from '../assets/tour.png'
import unsplash from '../assets/unsplash.png'
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <div className='bg-gray-50 pb-40'>
        <div className='px-12 py-20'>
            <h3 className='font-semibold text-3xl tracking-wider pb-4'>Web Creations</h3>
            <hr />
        </div>
        <div className='flex justify-center items-center'>
            <div className='grid gap-y-14 lg:grid-cols-2 xl:grid-cols-3 px-16 gap-x-10'>
                {/* Box 1 */}
                <div className='border shadow rounded-lg hover:scale-110 transition duration-300'>
                    <img src={red} alt="No image" className='rounded-t-lg'/>
                    <div className='px-6 py-12'>
                    <h4 className='font-semibold text-xl'>First Project</h4>
                    <p className='py-4'>Experience Redux's power in action with this dynamic shopping cart. Add, remove, and adjust item quantities seamlessly while prices and totals update in real-time.</p>
                    <FaGlobe className='text-slate-500 text-3xl hover:text-black transition duration-500'/>
               </div>
                </div>
                {/* Box 2 */}
                <div className='border shadow rounded-lg hover:scale-110 transition duration-300'>
                    <img src={tour} alt="No image" className='rounded-t-lg'/>
                    <div className='px-6 py-12'>
                        <h4 className='font-semibold text-xl'>Second Project</h4>
                        <p className='py-4'>Explore dynamic content manipulation with this project featuring a card displaying text. Increase word count with a click, revealing more content. Easily remove the card for a streamlined user experience</p>
                        <FaGlobe className='text-slate-500 text-3xl hover:text-black transition duration-500'/>
                    </div>
                </div>
                {/* Box 3 */}
                <div className='border shadow rounded-lg hover:scale-110 transition duration-300'>
                    <img src={unsplash} alt="No image" className='rounded-t-lg'/>
                    <div className='px-6 py-12'>
                        <h4 className='font-semibold text-xl'>Third Project</h4>
                        <p className='py-4'>Discover stunning visuals with ease using this project powered by the Unsplash API. Utilizing Axios, search for images effortlessly through a sleek search bar interface.</p>
                        <FaGlobe className='text-slate-500 text-3xl hover:text-black transition duration-500'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects