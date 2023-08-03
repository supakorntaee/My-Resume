import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
        <h2 className='my-name-web-logo'>Supakorn</h2>
        <ul className='nav-links'>
            <a href='#'>About</a>
            <a href='#'>Passions</a>
            <a href='#'>Portfolio</a>
            <a href='#'><span className='contact-me-button'>Contact Me</span></a>
        </ul>
    </nav>
  )
}

export default Navbar