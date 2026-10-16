import React, { useState } from 'react'
import Card from '../components/Card'
import { FaSearch } from "react-icons/fa";

const StudentList = ({studentsData,deleteStudent,updatestudent}) => {
  const [query,setQuery] = useState("")
  const [filteredstudents,setfilteredstudents] = useState(studentsData)
  
  const searchStudent =() => {
    const newarray = studentsData.filter((student) => {

      return student.Name.toLowerCase().includes(query.toLowerCase())
    })
    setfilteredstudents(newarray)
  }
  return (
    
    <div className='flex flex-col gap-3' >

  
          <div className='flex justify-between'>
            <h1 className=' p-3 font-bold text-amber-600 text-2xl'>Student List</h1>
            <div className='flex items-center border border-amber-600 rounded-2xl px-3 m-3'>
            <input  onInput={(e) =>{
            setQuery(e.target.value)
            searchStudent()
            }}className=' border-none outline-0 ' type="text" placeholder='Enter Student name'  />
           <FaSearch/>
           </div>
           
        </div>
      
        <div className='grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3'>
          {
            query ? filteredstudents?.map((student) =>{
            return <Card key ={student.id} student ={student} deleteStudent={deleteStudent}  updatestudent={updatestudent}/>
            }) :
            studentsData?.map((student) => {
            return <Card key ={student.id} student ={student} deleteStudent={deleteStudent}  updatestudent={updatestudent}/>

            })
          }
   
        </div>
    </div>
    
  )
}

export default StudentList
