import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './index.css';

const Modal = () => {

return (
  <div className="modalWrapper">
    <div className="overlay"></div>

    <form className="modal">
      <h5><strong>Login</strong></h5>
      <button title="Close" className="close-modal">
        x
      </button>
      <div className="emailInput">
        <label>Email</label>
        <input type="text" />
      </div>

      <div className="passwordInput">
        <label>Password</label>
        <input type="text" />
      </div>

      <div>
        <button onClick={() => console.log("register")} className="register">
          Register
        </button>
        <button onClick={() => console.log("login")} className="authButton popup-trigger">
          Login
        </button>
      </div>

    </form>
  </div>
)
}

export default Modal;