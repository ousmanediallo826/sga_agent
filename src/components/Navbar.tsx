import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-800 border-b border-gray-700 shadow-md sticky z-50 top-0'>
        <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center '>
            <Link to="/" className='flex items-center gap-2 text-lg font-bold text-blue-300'>
            <img src='/sga_logo.png' alt='sga logo' className='w-[35px]' />
            <span>SGA Agents</span>
            </Link>
            <ul className='flex justify-between items-center gap-5'>
                <li>
                    <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-blue-300 text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
  Brutal
</button>
                </li>
                <li>
                    <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
  Brutal
</button>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
