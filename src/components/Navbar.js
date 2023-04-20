import React from 'react'

function Navbar() {
  return (
    <>
    <div className='header'>
      <nav>
          <ul className='navbar'>
              <li className="navbar-item"><a href="#home">Home</a></li>
              <li className="navbar-item"><a href="#projects">Projects</a></li>
              <li className="navbar-item"><a href="#about">About</a></li>
              <li className="navbar-item"><a href="#contact">Contact</a></li>
          </ul>
      </nav>
    </div>
    </>
  );
}

export default Navbar;