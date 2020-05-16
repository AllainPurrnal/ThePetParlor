import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './index.css'

const Navbar = () => {

  return (
    <nav>
      <a href='/' id='logo'>ThePetParlor</a>
      <a href='/Services' id='navlink'>Services</a>
      <a href='/About' id='navlink'>About</a>
      <a href='/Contact' id='navlink'>Contact</a>

      <span id='toggle'>
        <FontAwesomeIcon icon={faBars} />
      </span>
    </nav>
  )
}

export default Navbar