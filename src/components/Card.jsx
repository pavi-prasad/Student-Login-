import React, { useState } from 'react'
import { IoEye } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import Editform from './Editform';


const Card = ({student ,deleteStudent,updatestudent}) => {
  const [editmode,seteditmode] =useState(false) 
  const navigate = useNavigate()
  return (
    <div className={`${editmode && "max-h-190"} max-h-48 rounded-xl border border-blue-100 bg-white  p-6  text-blue-950 shadow-md  transition duration-300 hover:-translate-y-1 hover:shadow-xl `}>

        {
          editmode ? <div > <Editform updatestudent={updatestudent} seteditmode={seteditmode} student={student}/> </div> :  
            <>
            <div className='flex justify-between'>
              <h1 className='text-xl font-bold'> Name : {student.Name}</h1>
               <button 
               
               aria-label="View student details" 
               className=' rounded-xl bg-blue-50 text-blue-900 transition hover:bg-blue-100 p-2' 
               onClick={() =>{
           seteditmode(!editmode)
          navigate(`/details/${student.id}`)
        }}> {editmode ? <IoEye className='hidden ' /> : <IoEye  size={25} /> }</button>
            </div>
            
      
            <p> Student Id : {student.StudentID}</p>
            </>
        }




      <div className='mt-6 flex items-center justify-between border-t border-blue-100 pt-4'>
       
        <button className='p-3 bg-green-50 text-green-700  rounded-xl font-bold transition hover:bg-green-100  }'
        onClick={()=>{
          seteditmode(!editmode)
        }}>{editmode ? <MdCancel size={25}/> : <FaRegEdit size={25} />}</button>
        <button 
        className='p-3 bg-red-50 text-red-600  rounded-xl font-bold transition hover:bg-red-100' 
        onClick={() =>{
          
          const okaytodelete =confirm("are you okey to delete")
            if(!okaytodelete){
              return
            }
          deleteStudent(student.id)
          seteditmode(!editmode)
        }}>{editmode ? <MdDeleteForever size={25} />: <MdDeleteForever color='red' size={25}/>}</button>
      </div>
      
    </div>
  )
}

export default Card
