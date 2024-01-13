import React from 'react'
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
const Button = () => {
  return (
    <div className='text-3xl flex flex-col space-y-6 md:space-y-0 mini:space-x-10 mini:flex-row mini:mt-6  '>
    <CiUser className='flex items-center'/>
    <BsCart2 className='flex items-center'/>
    </div>
  )
}

export default Button
