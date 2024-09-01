import React from 'react'
import wordpressicon from './wordpress.png'
import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='navbar'>
      <img src={wordpressicon} className='icon' /> WordPress
      <div className='navbar-links'>
        <Link to='/' className='navbar-link'>
        Products
        </Link>
        <Link to='/Resources' className='navbar-link'>
        Resources
        </Link>
        <Link to='/Features' className='navbar-link'>
        Features
        </Link>
      </div>
    </div>

  )
}

export default Navbar