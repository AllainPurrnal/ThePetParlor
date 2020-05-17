import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css'

import stock1 from '../../../assets/stock1.webp';

// Site Components
import MyCarousel from '../../Carousel';

const Home = () => {

  return (
    <div className="wrapper">
      <section className="aboutSection">
        <img src={stock1} />
        <h1>Mission Statement</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna et ipsum ultrices aliquam. Aliquam sed finibus augue, maximus vehicula lectus. Pellentesque mollis aliquam lectus. Ut ultrices enim ac sapien congue eleifend. Proin nec egestas est. Sed a ligula imperdiet, vestibulum leo nec, malesuada tellus. Phasellus vel mi in libero volutpat pretium in et leo. Phasellus et tincidunt ante. Phasellus rutrum risus orci, eget mollis metus placerat quis. Integer vulputate non dui non ultricies.
        </p>
          <NavLink to='/About'>
            <button>Learn More</button>
          </NavLink>
      </section>

      <section className="updateSection">
        <h1>News & Updates</h1>
      </section>
    </div>
  );
}

export default Home;