import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import './index.css'
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// Components
import Modal from '../Modal';
import Login from '../auth/Login';


class Navbar extends Component {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <nav>
  
        <ul className="nav-items">
          <NavLink to="/" id='logo'>ThePetParlor</NavLink>
          
          <li id='navlink'>
            <span onClick={this.toggleModal}>Register/Login</span>
            {/* <button onClick={this.toggleModal}>Register/Login</button> */}
            <Modal show={this.state.showModal} closeCallback={this.toggleModal} customClass="custom_modal_class">
              <Login />
            </Modal>
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
  }
}

export default Navbar;