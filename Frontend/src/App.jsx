import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Contactme from './Contactme/Contactme'
import { useAuth } from './Context/AuthProvider'
import Freebook from './Components/Freebook'
import AboutUs from './About/AboutUs'

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
       <Route path="/About" element={<AboutUs/>}/>
    </Routes>
    </>
    
  )
}

export default App
