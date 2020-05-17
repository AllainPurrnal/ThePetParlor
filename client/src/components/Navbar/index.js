import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

import './index.css'

const Navbar = () => {

  return (
    <nav>  
      <ul className="nav-items">
        <a href='/' id='logo'>ThePetParlor</a>
        <li id='navlink'>
          <a>Register/Login</a>
        </li>
        <li className="contact" id='navlink'>
          <NavLink to='/Contact' activeClassName="activeContact"><a>Contact</a></NavLink>
        </li>
        <li className="about" id='navlink'>
          <NavLink to='/About' activeClassName="activeAbout"><a>About</a></NavLink>
        </li>
        <li className="services" id='navlink'>
          <NavLink to='/Services' activeClassName="activeServices"><a>Services</a></NavLink>
        </li>

      </ul>
      {/* <span id='burger-menu' onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></span> */}
    </nav>
  )
}

export default Navbar