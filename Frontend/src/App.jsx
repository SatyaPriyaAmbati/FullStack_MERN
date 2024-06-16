import React from 'react'
import Home from './Home/Home'


import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Contactme from './Contactme/Contactme'
import AboutUs from './About/AboutUs'
import { useAuth } from './Context/AuthProvider'

function App() {
  const[authUser,setAuthUser]=useAuth();
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
       <Route path="/Contact" element={<Contactme/>}/>
       <Route path="/" element={<AboutUs/>}/>
    </Routes>
    </>
    
  )
}

export default App
