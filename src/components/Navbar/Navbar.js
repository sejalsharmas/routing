import React from 'react'
import wordpressicon from './wordpress.png'
import './Navbar.css'

function Navbar() {
  return (
   <div className='navbar'>
       <img src={wordpressicon} className='icon'/> WordPress
       <div className='navbar-links'>
        <a href='/' className='navbar-link'>Products</a>
        <a href='/Resources' className='navbar-link'>Resources</a>
        <a href='/Features' className='navbar-link'>Features</a>
       </div>
    </div>
   
  )
}

export default Navbar