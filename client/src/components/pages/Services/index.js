import React, { Component } from 'react';
import './index.css';

import Modal from '../../Modal';

class Services extends Component {
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
      <div className="wrapper servicesWrap">
        <div className="service">
          <img src="https://via.placeholder.com/250" alt="placeholder"/>
          
          <div className="serviceOption">
            <div className="serviceHeader">
              <h1>Lorem 1</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut enim nunc. Aenean ultrices sagittis faucibus.</p>
            </div>
  
            <div className="serviceList">
            <ul>
                <li>Duis eget tristique justo</li>
                <li>Duis eget tristique justo</li>
                <li>Duis eget tristique justo</li>
                <li>Duis eget tristique justo</li>
              </ul>
            </div>
  
            <div className="btn">
              <button onClick={this.toggleModal}>Book Now</button>

              <Modal show={this.state.showModal} closeCallback={this.toggleModal} customClass="custom_modal_class">
                <h1>Appointment!</h1>
              </Modal>
            </div>
          </div>
        </div>
  
        {/* <div className="service">
          <img src="https://via.placeholder.com/250" alt="placeholder"/>
          
          <div className="serviceOption">
            <div className="serviceHeader">
              <h1>Lorem 1</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut enim nunc. Aenean ultrices sagittis faucibus.</p>
            </div>
  
            <div className="serviceList">
              <ul>
                <li>Duis eget tristique justo</li>
                <li>Duis eget tristique justo</li>
                <li>Duis eget tristique justo</li>
                <li>Duis eget tristique justo</li>
              </ul>
            </div>
  
            <div className="btn">
              <button>Book Now</button>
            </div>
          </div>
        </div>
  
        <div className="service">
          <img src="https://via.placeholder.com/250" alt="placeholder"/>
          
          <div className="serviceOption">
            <div className="serviceHeader">
              <h1>Lorem 1</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut enim nunc. Aenean ultrices sagittis faucibus.</p>
            </div>
  
            <div className="serviceList">
              <ul>
                <li>Duis eget tristique justo</li>
                <li>Duis eget tristique justo</li>
                <li>Duis eget tristique justo</li>
                <li>Duis eget tristique justo</li>
              </ul>
            </div>
  
            <div className="btn">
              <button>Book Now</button>
            </div>
          </div>
        </div>
  
        <div className="addService">
          <img src="https://via.placeholder.com/250" alt="placeholder"/>
          <img src="https://via.placeholder.com/250" alt="placeholder"/>
          <img src="https://via.placeholder.com/250" alt="placeholder"/>
          <img src="https://via.placeholder.com/250" alt="placeholder"/>
        </div> */}
  
      </div>
    )
  }
}

export default Services;