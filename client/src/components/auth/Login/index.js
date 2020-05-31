import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import './index.css';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const AuthModal = () => {

  return (
    <div className="authModal">
      
      <div className="authHeader">
        <FontAwesomeIcon icon={faPaw} pull="left" />
        <h1>Login</h1>
        <FontAwesomeIcon icon={faPaw} pull="right" />
      </div>

      <hr />

      <div className="emailInput">
        <label>Email</label>
        <input type="text" />
      </div>

      <div className="passwordInput">
        <label>Password</label>
        <input type="password" />
      </div>

      <button onClick={() => console.log("login")} className="authButton popup-trigger">
        Login
      </button>
      <span>Create an Account</span>
        
    </div>
  )
}

export default AuthModal;