import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css'

// Site Components
import MyCarousel from '../../Carousel';

const Home = () => {

  return (
    <div className="wrapper homeWrap">
      <div className="carouselSection">
        <MyCarousel />

        {/* <div className="updateSection">
          <h1><span>News & Updates</span></h1>
        </div> */}
      </div>

      <div className="aboutSection">
        <h1><span>Philosophy</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna et ipsum ultrices aliquam. Aliquam sed finibus augue, maximus vehicula lectus. Pellentesque mollis aliquam lectus. Ut ultrices enim ac sapien congue eleifend. Proin nec egestas est. Sed a ligula imperdiet, vestibulum leo nec, malesuada tellus.</p>
          <NavLink to='/About'>
            <button>Learn More</button>
          </NavLink>
      </div>

      <div className="serviceSection">
        <h1><span>Services</span></h1>
      </div>

      <div className="infoSection">
        <div className="hours">
          <h1>Hours</h1>

          <ul>
            <li>Monday: 9:00am - 6:00pm</li>
            <li>Tuesday: 9:00am - 6:00pm</li>
            <li>Wednesday: 9:00am - 5:00pm</li>
            <li>Thursday: 9:00am - 6:00pm</li>
            <li>Friday: 9:00am - 3:00pm</li>
            <li>Saturday/Sunday: Closed</li>
          </ul>
        </div>
        
        <div className="contactForm">
          <h1><span>Contact Us</span></h1>
          <form>
            <p>Name:</p><input></input>
            <p>Email Address:</p><input></input>
            <p>Subject:</p><input></input>
            <p>Message:</p><input></input>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Home;