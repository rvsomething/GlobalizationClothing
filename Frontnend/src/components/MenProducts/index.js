import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './styles';
import image1 from '../../assets/homemensection.png';
import image2 from '../../assets/homewomensection.png';
import image3 from '../../assets/homekidssection.png';

const MenProducts = () => {
  return (
    <div>
      <Wrapper className='section'>
        <div className='title'>
          <h2>Shop By-</h2>
        </div>
        <div className='section-center featured'>
          <a href='/men' className="image-link">
            <img className="circular-image" src={image1} alt="Men Products" />
            <div className="image-text">Men</div> {/* Added text under the image */}
          </a>
          <a href='/women' className="image-link">
            <img className="circular-image" src={image2} alt="Women Products" />
            <div className="image-text">Women</div> {/* Added text under the image */}
          </a>
          <a href='/kids' className="image-link">
            <img className="circular-image" src={image3} alt="Kids Products" />
            <div className="image-text">Kids</div> {/* Added text under the image */}
          </a>
        </div>
        <br />
        <Link to='/products' className='btn'>
          All Products
        </Link>
      </Wrapper>
    </div>
  );
};

export default MenProducts;
