import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import AddStudent from './pages/AddStudent'
import StudentList from './pages/StudentList'
import { useEffect } from 'react'
import Studentdetails from './pages/Studentdetails'


const App = () => {
  const [studentsData,setstudentsData] = useState(JSON.parse(localStorage.getItem('studentsData')) || [])
  const addstudent = (data) =>{

     const studentwithemail = studentsData.find((x) => x.Email === data.Email)

    if(studentwithemail){
      return alert("Already added student with this email")
    }

    setstudentsData((prev) =>([...prev,data]))
    console.log(studentsData)
  }
  
  const deleteStudent =(id) =>{
    const filteredStudents = studentsData.filter((student) =>{
      return student.id !==id
    })
    setstudentsData(filteredStudents)
  }

  useEffect(() =>{
    localStorage.setItem('studentsData',JSON.stringify(studentsData))
  },[studentsData])

  const updatestudent  = (id,data) =>{
    const filteredStudents = studentsData.map((student) =>{
      return student.id ===id ? {...data} :student
    })
    setstudentsData(filteredStudents)
  }

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/add' element={<AddStudent studentsData={studentsData} addstudent ={addstudent}/>}/>
        <Route path='/list' element={<StudentList studentsData={studentsData} deleteStudent={deleteStudent} updatestudent={updatestudent}/>}/>
        <Route path='/details/:id' element={<Studentdetails studentsData={studentsData}/>} />
         
      </Routes>
    </div>
  )
}

export default App
