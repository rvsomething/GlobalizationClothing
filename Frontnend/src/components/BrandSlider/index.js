import React, { useEffect } from 'react';
import brand1 from '../../assets/logo.png';
import brand2 from '../../assets/logomobile.png';
import brand3 from '../../assets/images.png';
import brand4 from '../../assets/download (1).png';
import brand5 from '../../assets/download (2).png';
import brand6 from '../../assets/download (3).png';
const BrandSlider = () => {
  useEffect(() => {
    // Clone the logos slide element after component mounts
    const logosSlide = document.querySelector('.logos-slide');
    const copy = logosSlide.cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
  }, []);

  return (
    <div className='logos'>
      <div className='title'>
        <h2>Brands</h2>
      </div>

      <div className='logos-slide'>
        <img src={brand1} alt='logo' />
        <img src={brand2} alt='logo' />
        <img src={brand3} alt='logo' />
        <img src={brand4} alt='logo' />
        <img src={brand5} alt='logo' />
        <img src={brand6} alt='logo' />
      </div>

      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
              .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.25rem;
    color:#000;
  }

          .logos {
            overflow: hidden;
            padding: 60px 0;
            background: white;
            white-space: nowrap;
            position: relative;
          }

          .logos:before,
          .logos:after {
            position: absolute;
            top: 0;
            width: 250px;
            height: 100%;
            content: "";
            z-index: 2;
          }

          .logos:before {
            left: 0;
            background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
          }

          .logos:after {
            right: 0;
            background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
          }

          .logos:hover .logos-slide {
            animation-play-state: paused;
          }

          .logos-slide {
            display: inline-block;
            animation: 35s slide infinite linear;
          }

          .logos-slide img {
            height: 60px;
            margin: 0 40px;
          }
        `}
      </style>
    </div>
  );
};

export default BrandSlider;
