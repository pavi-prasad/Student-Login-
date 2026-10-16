import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaRegIdCard } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Form = ({addstudent}) => {
    const navigate = useNavigate()
const [studentdata,setstudentdata] = useState({
    Name : "",
    Age  : "",
    Phone : "",
    Email : "",
    College : "",
    StudentID :"",
    Address :""

})

const handleInput =(e) =>{
    const {value,name}= e.target
    setstudentdata((prev) =>({...prev,[name]:value}))
    console.log(studentdata)
}

const handleSubmit = (e) =>{
    e.preventDefault()
    if(studentdata.Name =="" || studentdata.Age =="" || studentdata.Phone == ""||studentdata.Email =="" ||studentdata.College =="" || studentdata.StudentID =="" || studentdata.Address==""){
        return alert ("Input Field is empty")
    }
    let newstudentdata ={
        id:Date.now(),
        Name:studentdata.Name,
        Age:studentdata.Age,
        Phone:studentdata.Phone,
        Email:studentdata.Email,
        College:studentdata.College,
        StudentID:studentdata.StudentID,
        Address:studentdata.Address
    }
    addstudent(newstudentdata)
    alert("new student added")
    navigate('/list')
}

  return (
    <div  >
        <form onSubmit={handleSubmit} className='flex  flex-col gap-2  justify-around w-full max-w-xl space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg  '>
            <h2 className="text-3xl font-bold text-blue-950">
                <span className="h-10 w-2 rounded-full bg-amber-600"></span>
                Add New Student
             </h2>
      <p className="text-slate-500">
        Fill in the details to register a new student.
      </p>
            <div className='relative w-full'>
             <CiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-slate-500" />
             <input 
                className='p-2 pl-10 w-full rounded-xl border border-slate-200  bg-white outline-none transition focus:border-[#FFB830] focus:ring-2 focus:ring-amber-100 ' 
                onInput={handleInput} 
                value={studentdata.Name} 
                name='Name' 
                type="text"  
                placeholder=' Enter student name' />

           </div>


           <div className="relative w-full">
            <CiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-slate-500" />
            <input 
                className='p-2 pl-10 w-full rounded-xl border border-slate-200  bg-white outline-none transition focus:border-[#FFB830] focus:ring-2 focus:ring-amber-100 ' 
                onInput={handleInput} 
                value={studentdata.Age} 
                name='Age' 
                type="number" 
                placeholder='Enter age' />
           </div>
           <div className="relative w-full">
            <IoCallOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-slate-500" />
            <input 
                className='p-2 pl-10 w-full rounded-xl border border-slate-200  bg-white outline-none transition focus:border-[#FFB830] focus:ring-2 focus:ring-amber-100' 
                onInput={handleInput} 
                value={studentdata.Phone} 
                name='Phone' 
                type="phone" 
                placeholder='Enter your Phone number' />
           </div>

           <div className="relative w-full">
            <MdOutlineEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-slate-500" />
             <input 
                className='p-2 pl-10 w-full rounded-xl border border-slate-200  bg-white outline-none transition focus:border-[#FFB830] focus:ring-2 focus:ring-amber-100' 
                onInput={handleInput} 
                value={studentdata.Email} 
                name='Email' 
                type="text" 
                placeholder='Enter your email' />
           </div>

           <div className="relative w-full">
            <RiGraduationCapLine className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-slate-500" />
              <input 
                className='p-2 pl-10 w-full rounded-xl border border-slate-200  bg-white outline-none transition focus:border-[#FFB830] focus:ring-2 focus:ring-amber-100' 
                onInput={handleInput} 
                value={studentdata.College} 
                name='College' 
                type="text" 
                placeholder='Enter your college name' />  
           </div>

           <div className="relative w-full">
            <FaRegIdCard className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-slate-500" />
              <input 
                className='p-2 pl-10 w-full rounded-xl border border-slate-200  bg-white outline-none transition focus:border-[#FFB830] focus:ring-2 focus:ring-amber-100' 
                onInput={handleInput} 
                value={studentdata.StudentID} 
                name='StudentID' 
                type="text" 
                placeholder='Enter your college id' />
           </div>

           <div className="relative w-full">
            <CiLocationOn className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-slate-500" />
              <input 
                className='p-2 pl-10 w-full rounded-xl border border-slate-200  bg-white outline-none transition focus:border-[#FFB830] focus:ring-2 focus:ring-amber-100' 
                onInput={handleInput} 
                value={studentdata.Address} 
                name='Address' 
                type="text" 
                placeholder='Enter your Address' />
            
           </div>
      
            <div >
                <button 
                className='p-3 w-full  rounded-xl font-bold text-xl transition bg-amber-600  
                hover:bg-amber-400 text-blue-950'>Add Student
                </button>
            </div>
        </form>
      
    </div>
  )
}

export default Form
