import React, { useState } from 'react';

import './index.css';

import stock1 from '../../assets/stock1.webp';
import stock2 from '../../assets/stock2.webp';
import stock3 from '../../assets/stock3.webp';
import stock4 from '../../assets/stock4.webp';

const items = [
  { key: 1, src: stock1 }, { key: 2, src: stock2 }, { key: 3, src: stock3 }, { key: 4, src: stock4 },
]

const MyCarousel = (props) => {
  
  return (
    <div className="carousel-wrapper">
      <img src={items[0].src} />
    </div>
  );
}

export default MyCarousel