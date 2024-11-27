import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import heroBcg from '../../assets/2.png'; // Hero Image for Women
import dressImage from '../../assets/womendress.png'; // Dress Image
import topsImage from '../../assets/womentop.png'; // Tops Image
import skirtsImage from '../../assets/womenskirt.png'; // Skirts Image
import jeansImage from '../../assets/womenjeans.png'; // Blouses Image
import Wrapper from './styles';

const WomenCategory = () => {
  return (
    <Wrapper className='section1'>
      {/* Hero Image Section */}
      <div className="hero-image">
        <a href='/products?gender=women' style={{ display: 'block' }}>
          <img src={heroBcg} alt='Women’s clothing collection - Image 1' />
        </a>
      </div>

      {/* Image Cards Section for Women Clothing Categories */}
      <div className="image-cards">
        <a href='/products?category=Women%20Dress' className="image-card">
          <img src={dressImage} alt="Dresses" />
          <div className="card-text">Dresses</div>
        </a>
        <a href='/products?category=Women%20Top' className="image-card">
          <img src={topsImage} alt="Tops" />
          <div className="card-text">Tops</div>
        </a>
        <a href='/products?category=Women%20Skirt' className="image-card">
          <img src={skirtsImage} alt="Skirts" />
          <div className="card-text">Skirts</div>
        </a>
        <a href='/products?category=Women%20Jeans' className="image-card">
          <img src={jeansImage} alt="jeans" />
          <div className="card-text">Jeans</div>
        </a>
      </div>
    </Wrapper>
  );
};

export default WomenCategory;
