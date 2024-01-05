import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import Button from './Button'
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    
   <nav className='bg-[#A367B1]  '>
    <div className=' flex items-center font-medium justify-around'>
      <div className='z-[-10rem] p-5 md:w-auto w-full flex justify-between '>
      <div
          className="md:cursor-pointer h-16  "
        />
        <div className='flex justify-center items-center absolute'>
        <h1 className='font-logo2 md:text-3xl text-2xl md:mt-3  text-[#f6c356]'>AERIES</h1>
        </div>
        <div  onClick={()=>setOpen(!open)}
        className={`text-3xl absolute cursor-pointer right-8 z-30 top-6 md:hidden`}>
          {!open && <CiMenuBurger></CiMenuBurger>}
        
        </div>
      </div>
      <ul className='md:flex hidden uppercase items-center gap-8 font-logo '>
        <li>
        </li>
        <NavLinks />
      </ul>
      <div className='md:block hidden'>
        <Button />
      </div>
      {/* Mobile Responsive */}
      <ul
          className={`
        md:hidden bg-[#6b5e78] fixed w-[50%] top-0 z-20 overflow-y-auto bottom-0 py-4 pl-4
        duration-500 ${open ? "right-0" : "right-[-100%]"}
        `}>
      <li>
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute cursor-pointer right-8 z-30 top-6 md:hidden'>

          <MdOutlineClose></MdOutlineClose>
        </div>
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
