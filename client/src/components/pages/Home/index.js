import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css'

// Site Components
import MyCarousel from '../../Carousel';

// <p>Lorem 1 ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna et ipsum ultrices aliquam. Aliquam sed finibus augue, maximus vehicula lectus. Pellentesque mollis aliquam lectus.</p>
// <p>Lorem 2 ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna et ipsum ultrices aliquam. Aliquam sed finibus augue, maximus vehicula lectus. Pellentesque mollis aliquam lectus.</p>
// <p>Lorem 3 ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna et ipsum ultrices aliquam. Aliquam sed finibus augue, maximus vehicula lectus. Pellentesque mollis aliquam lectus.</p>

const Home = () => {

  // const tabChange = (n, id) => {
  //   console.log(n)

  // }

  return (
    <div className="wrapper homeWrap">
      <section className="carouselSection">
        <MyCarousel />
      </section>

      {/* <section className="updateSection">
        <h1><span>News & Updates</span></h1>
      </section> */}

      <section className="aboutSection">
        <h1><span>Philosophy</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna et ipsum ultrices aliquam. Aliquam sed finibus augue, maximus vehicula lectus. Pellentesque mollis aliquam lectus. Ut ultrices enim ac sapien congue eleifend. Proin nec egestas est. Sed a ligula imperdiet, vestibulum leo nec, malesuada tellus.</p>
          <NavLink to='/About'>
            <button>Learn More</button>
          </NavLink>
      </section>

      {/* <section className="serviceSection">
        <div className="tabHeaders">
          <button onClick={() => tabChange(1)}>
            <h1>Option 1</h1>
          </button>

          <button onClick={() => tabChange(2)}>
            <h1>Option 2</h1>
          </button>

          <button onClick={() => tabChange(3)}>
            <h1>Option 3</h1>
          </button>
        </div>
        <div className="tabDesc">
          <p id="opt1">Option 1</p>
          <p id="opt2">Option 1</p>
          <p id="opt3">Option 1</p>
        </div>
      </section> */}

    </div>
  );
}

export default Home;