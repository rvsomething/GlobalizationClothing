import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import heroBcg from '../../assets/1.png';
import heroBcg2 from '../../assets/2.png';
import heroBcg3 from '../../assets/3.png';

const Hero = () => {
  return (
    <div className='carousel-wrapper'>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <a href='/products?gender=men' style={{ display: 'block' }}>
            <img src={heroBcg} alt='Men’s clothing collection - Image 1' />
          </a>
        </div>
        <div>
          <a href='/products?gender=women' style={{ display: 'block' }}>
            <img src={heroBcg2} alt='Men’s clothing collection - Image 2' />
          </a>
        </div>
        <div>
          <a href='/products?gender=kids' style={{ display: 'block' }}>
            <img src={heroBcg3} alt='Men’s clothing collection - Image 3' />
          </a>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
