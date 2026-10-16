import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoHome } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa";


const Navbar = () => {
  const [menuopen,setmenuopen] = useState(false)
const openmenu = () =>{
  setmenuopen(!menuopen)
}

  return (
    <div className='relative  flex justify-between items-center bg-blue-950 p-4 '>
        <h1 className='text-white font-bold text-2xl'>Student<span className='text-amber-600'>Login</span></h1>
      <div className='sm:flex hidden gap-4 text-white  px-2'>
        <Link className=' px-3 py-2 rounded-xl  flex items-center gap-2 active:bg-amber-600 hover:scale-[1.1]' to={'/'}> <IoHome size={20}/>Home</Link>
        <Link className=' px-3 py-2 rounded-xl  flex items-center gap-2 active:bg-amber-600 hover:scale-[1.1]' to={'add'}><IoAddCircleOutline size={20}/> AddStudent</Link>
        <Link className=' px-3 py-2 rounded-xl  flex items-center gap-2 active:bg-amber-600 hover:scale-[1.1]' to={'list'}><FaList size={20} /> StudentList</Link>
      </div>



        {
          menuopen && <>
          <div className='absolute top-20  sm:hidden flex flex-col  gap-4 text-white bg-gray-100  px-2 items-end w-full'>
            <Link className=' px-3 py-2 rounded-xl  flex items-center gap-2 active:bg-amber-600 hover:scale-[1.1]' to={'/'}> <IoHome/>Home</Link>
            <Link className=' px-3 py-2 rounded-xl  flex items-center gap-2 active:bg-amber-600 hover:scale-[1.1]' to={'add'}><IoAddCircleOutline /> AddStudent</Link>
            <Link className=' px-3 py-2 rounded-xl  flex items-center gap-2 active:bg-amber-600 hover:scale-[1.1]' to={'list'}><FaList /> StudentList</Link>
          </div>
          </>
        }


      <div onClick={() =>{
        openmenu()
      }} className='sm:hidden flex '>
        <RxHamburgerMenu size={26}/>
      </div>

    </div>
  )
}

export default Navbar
