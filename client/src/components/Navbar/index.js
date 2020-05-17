import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

import './index.css'

const Navbar = () => {

  return (
    <nav>  
      <ul className="nav-items">
        <a href='/' id='logo'>ThePetParlor</a>
        <li id='navlink'>
          <a href='/'>Register/Login</a>
        </li>
        <li id='navlink'>
          <a href='/Contact'>Contact</a>
        </li>
        <li id='navlink'>
          <a href='/About'>About</a>
        </li>
        <li id='navlink'>
          <a href='/Services'>Services</a>
        </li>

      </ul>
      {/* <span id='burger-menu' onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></span> */}
    </nav>
  )
}

export default Navbar