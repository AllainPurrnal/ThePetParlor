import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css'

// Site Components
import MyCarousel from '../../Carousel';

const Home = () => {

  return (
    <div className="wrapper homeWrap">
      <section className="carouselSection">
        <MyCarousel />
      </section>

      <section className="aboutSection">
        <h1><span>Philosophy</span></h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna et ipsum ultrices aliquam. Aliquam sed finibus augue, maximus vehicula lectus. Pellentesque mollis aliquam lectus. Ut ultrices enim ac sapien congue eleifend. Proin nec egestas est. Sed a ligula imperdiet, vestibulum leo nec, malesuada tellus.
        </p>
          <NavLink to='/About'>
            <button>Learn More</button>
          </NavLink>
      </section>

      <section className="updateSection">
        <h1><span>News & Updates</span></h1>
        
      </section>

    </div>
  );
}

export default Home;