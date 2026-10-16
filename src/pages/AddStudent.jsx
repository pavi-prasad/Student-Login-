import React from 'react'
import Form from '../components/Form'

const AddStudent = ({addstudent,studentsData}) => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Form studentsData={studentsData} addstudent ={addstudent}/>
    </div>
  )
}

export default AddStudent
