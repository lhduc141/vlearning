// File Carousel.js
import React from 'react';
import { Carousel as AntCarousel } from "antd";

const Carousel = () => {
  return (
    <AntCarousel autoplay effect="fade">
      <div>
        <img className='w-full' src="./img/63898019af47c60040e48ea7.jpg" alt="" />
      </div>
      <div>
        <img className='w-full' src="./img/63ac0c9ef5c9150025b52903.jpg" alt="" />
      </div>
      <div>
        <img className='w-full' src="./img/63b68ce8d45fde00262e81cd.jpg" alt="" />
      </div>
    </AntCarousel>
  );
};

export default Carousel;
