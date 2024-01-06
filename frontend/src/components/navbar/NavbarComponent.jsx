import React from 'react'
import { NavLink } from 'react-router-dom';
// import CurrentCourseComponent from './CurrentCourseComponent';
import '../../styles/components/Navbar.scss'

export default function Navbar () {
  return (
    <div className='navbar'>
      <NavLink className="navlink" to='/home'>Home</NavLink>
      {/* <NavLink className="navlink" to='/aboutus'>About Us</NavLink>
      <NavLink className="navlink" to='/mystats'>My Stats</NavLink>
      <NavLink className="navlink" to='/gradelevels'>Grade Levels</NavLink>
      <NavLink className="navlink" to='/subjects'>Subjects</NavLink>
  <CurrentCourseComponent />*/}
    </div>
  )
} 