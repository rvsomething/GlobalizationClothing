import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import heroBcg from '../../assets/1.png'; // Hero Image
import hoodieImage from '../../assets/menhoodie.jpg'; // Hoodie Image
import jeansImage from '../../assets/menjeans.png'; // Jeans Image
import shirtImage from '../../assets/menshirt.jpg'; // Shirt Image
import pantsImage from '../../assets/menpants.png'; // Pants Image
import Wrapper from './styles';

const MenCategory = () => {
  return (
    <Wrapper className='section1'>
      {/* Hero Image Section */}
      <div className="hero-image">
        <a href='/products?gender=men' style={{ display: 'block' }}>
          <img src={heroBcg} alt='Men’s clothing collection - Image 1' />
        </a>
      </div>

      {/* Image Cards Section for Men Clothing Categories */}
      <div className="image-cards">
      <a href='/products?category=Men%20Hoodie' className="image-card">
  <img src={hoodieImage} alt="Hoodies" />
  <div className="card-text">Hoodies</div>
</a>

        <a href='/products?category=Men%20Jeans' className="image-card">
          <img src={jeansImage} alt="Jeans" />
          <div className="card-text">Jeans</div>
        </a>
        <a href='/products?category=Men%20Shirt' className="image-card">
          <img src={shirtImage} alt="Shirts" />
          <div className="card-text">Shirts</div>
        </a>
        <a href='/products?category=Men%20Pants' className="image-card">
          <img src={pantsImage} alt="Pants" />
          <div className="card-text">Pants</div>
        </a>
      </div>
    </Wrapper>
  );
};

export default MenCategory;
