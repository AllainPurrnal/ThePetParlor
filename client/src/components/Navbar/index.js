import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

import './index.css'

const Navbar = () => {

  return (
    <nav>

      <ul className="nav-items">
        <NavLink to="/" id='logo'>ThePetParlor</NavLink>
        
        <li id='navlink'>
          <a href='/'>Register/Login</a>
        </li>

        <li className="contact" id='navlink'>
          <NavLink to='/Contact' activeClassName="activeContact">Contact</NavLink>
        </li>

        <li className="about" id='navlink'>
          <NavLink to='/About' activeClassName="activeAbout">About</NavLink>
        </li>

        <li className="services" id='navlink'>
          <NavLink to='/Services' activeClassName="activeServices">Services</NavLink>
        </li>
      </ul>

      {/* <span id='burger-menu' onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></span> */}
    </nav>
  )
};

export default Navbar;