import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import heroBcg from '../../assets/1.png';
import heroBcg2 from '../../assets/2.png';
import heroBcg3 from '../../assets/3.png';

const Hero = () => {
  return (
    <div className="carousel-wrapper">
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                <div>
                    <img src={heroBcg} alt="Image 1" />
                </div>
                <div>
                    <img src={heroBcg2} alt="Image 2" />
                </div>
                <div>
                    <img src={heroBcg3} alt="Image 3" />
                </div>
            </Carousel>
        </div>
  );
};

export default Hero;
