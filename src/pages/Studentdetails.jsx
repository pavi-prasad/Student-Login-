
import React, { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaRegIdCard ,FaArrowLeft ,  } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Studentdetails = ({ studentsData = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [currentstudent] = useState(() =>
    studentsData.find(student => String(student.id) === id)
  );

  if (!currentstudent) {
    return <h2>Student not found!</h2>;
  }

   const details = [
    { label: 'Full Name', value: currentstudent.Name, icon: <CiUser /> },
    { label: 'Age', value: currentstudent.Age, icon: <CiCalendar /> },
    { label: 'Phone Number', value: currentstudent.Phone, icon: <IoCallOutline /> },
    { label: 'Email Address', value: currentstudent.Email, icon: <MdOutlineEmail /> },
    { label: 'College', value: currentstudent.College, icon: <RiGraduationCapLine /> },
    { label: 'Student ID', value: currentstudent.StudentID, icon: <FaRegIdCard /> },
    { label: 'Address', value: currentstudent.Address, icon: <CiLocationOn /> },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-5 md:p-10">
      <div className="max-w-4xl mx-auto">

        <button
          onClick={() => navigate('/list')}
          className="flex items-center gap-2 text-indigo-600 font-semibold mb-6 hover:text-indigo-800"
        >
          <FaArrowLeft /> Back to Students
        </button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Header */}
          <div className=" bg-blue-950 to-purple-600 p-8 text-white">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center text-4xl">
                <CiUser />
              </div>

              <div>
                <p className="text-indigo-100 text-sm">
                  STUDENT PROFILE
                </p>
                <h1 className="text-3xl font-bold mt-1">
                  {currentstudent.Name}
                </h1>
                <p className="text-indigo-100 mt-2">
                  ID: {currentstudent.StudentID}
                </p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {details.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition duration-300"
                >
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg text-lg">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-gray-500">
                      {item.label}
                    </p>
                    <p className="font-semibold text-gray-800 break-word mt-1">
                      {item.value || 'Not provided'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => navigate('/list')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                Close Profile
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Studentdetails;