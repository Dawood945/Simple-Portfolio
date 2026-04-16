import React from 'react'

const NavBar = () => {
  return (
    <div className="flex gap-16 px-12 py-5 pt-9 bg-green-100">
        <h1 className="text-4xl font-bold">
            Web
            <span className="text-green-700">Dev</span>
        </h1>
        <ul className="flex items-center gap-x-4 text-lg">
            <li><a href="#">Home</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
        </ul>
    </div>
    
  )
}

export default NavBar