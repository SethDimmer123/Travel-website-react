import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  return (
  <>
  <nav className='navbar'>
    <div className='navbar-container'>
        <Link to="/" className="navbar-logo">
            TRVL
            <i class='fab fa-typo3' />
        </Link>
        
    </div>
  </nav>
  </>
  )
}

export default Navbar
