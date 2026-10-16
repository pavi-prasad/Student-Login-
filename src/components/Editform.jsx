import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CiUser } from "react-icons/ci"
import { FaPhone, FaEnvelope, FaGraduationCap } from "react-icons/fa"
import { MdNumbers, MdLocationOn, MdBadge } from "react-icons/md"


const Editform = ({student,seteditmode,updatestudent}) => {
    const navigate = useNavigate()
const [studentdata,setstudentdata] = useState({
    Name : student.Name,
    Age  : student.Age,
    Phone : student.Phone,
    Email : student.Email,
    College : student.College,
    StudentID :student.StudentID,
    Address :student.Address

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
        id:student.id,
        Name:studentdata.Name,
        Age:studentdata.Age,
        Phone:studentdata.Phone,
        Email:studentdata.Email,
        College:studentdata.College,
        StudentID:studentdata.StudentID,
        Address:studentdata.Address
    }
    updatestudent(student.id,newstudentdata)
    seteditmode(false)
    alert("Student details updated")
    navigate('/list')
   
}

   const inputStyle =
    "w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-3 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"

  const fields = [
    { name: "Name", placeholder: "Enter student name", type: "text", icon: CiUser },
    { name: "Age", placeholder: "Enter age", type: "number", icon: MdNumbers },
    { name: "Phone", placeholder: "Enter phone number", type: "tel", icon: FaPhone },
    { name: "Email", placeholder: "Enter your email", type: "email", icon: FaEnvelope },
    { name: "College", placeholder: "Enter college name", type: "text", icon: FaGraduationCap },
    { name: "StudentID", placeholder: "Enter college ID", type: "text", icon: MdBadge },
    { name: "Address", placeholder: "Enter your address", type: "text", icon: MdLocationOn }
  ]

  return (
    <div className="w-full min-w-0">

      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
      >

        <h2 className="flex items-center gap-3 text-2xl font-bold text-blue-950">
          <span className="h-8 w-1.5 shrink-0 rounded-full bg-amber-500"></span>
          Edit Student
        </h2>

        <p className="text-sm text-slate-500">
          Update the student's information below.
        </p>

        {fields.map(({ name, placeholder, type, icon: Icon }) => (
          <div key={name} className="relative w-full">
            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-slate-500" />

            <input
              className={inputStyle}
              onChange={handleInput}
              value={studentdata[name] ?? ""}
              name={name}
              type={type}
              placeholder={placeholder}
              aria-label={placeholder}
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full rounded-xl bg-amber-500 px-4 py-3 font-bold text-blue-950 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2"
        >
          Update Student
        </button>

        

      </form>
    </div>
  )
}



export default Editform
