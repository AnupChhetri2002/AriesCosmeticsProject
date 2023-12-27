import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import Button from './Button'
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
   <nav className='bg-[#A367B1]'>
    <div className=' flex items-center font-medium justify-around'>
      <div className='z-50 p-5 md:w-auto w-full flex justify-between '>
      <div
          className="md:cursor-pointer h-16  "
        />
        <div className='flex justify-center items-center absolute'>
        <h1 className='font-logo2 md:text-3xl text-2xl md:mt-3  text-[#f6c356]'>AERIES</h1>
        </div>
        <div  onClick={()=>setOpen(!open)}
        className='text-3xl absolute cursor-pointer right-8 top-6 md:hidden'>
          {open? <MdOutlineClose></MdOutlineClose>:<CiMenuBurger></CiMenuBurger>}
        
        </div>
      </div>
      <ul className='md:flex hidden uppercase items-center gap-8 font-logo '>
        <li>
          <Link to='/home' className='py-7 px-3 inline-block text-[#FFD1E3] hover:underline' >
            Home
          </Link>
        </li>
        <NavLinks />
      </ul>
      <div className='md:block hidden'>
        <Button />
      </div>
      {/* Mobile Responsive */}
      <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}>
      <li>
          <Link to='/home' className='py-7 px-3 inline-block text-[#FFD1E3] ' >
            Home
          </Link>
        </li>
        <NavLinks />
        <div className='py-5'>
          <Button />
        </div>
      </ul>
    </div>
   </nav>
  )
}

export default Navbar
