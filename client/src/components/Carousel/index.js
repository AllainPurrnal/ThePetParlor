// import React, { useState } from 'react';
import React from 'react';

import './index.css';

import stock1 from '../../assets/stock1.webp';
import stock2 from '../../assets/stock2.webp';
import stock3 from '../../assets/stock3.webp';
import stock4 from '../../assets/stock4.webp';

const items = [
  { key: 1, src: stock1, alt: "stock photo" }, { key: 2, src: stock2, alt: "stock photo" }, { key: 3, src: stock3, alt: "stock photo" }, { key: 4, src: stock4, alt: "stock photo" },
]

const MyCarousel = (props) => {
  
  return (
    <div className="carousel-wrapper">
      <img src={items[0].src} alt={items[0].alt} />
    </div>
  );
}

export default MyCarousel