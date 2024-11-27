import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import heroBcg from '../../assets/3.png'; // Hero Image for Kids
import boysTShirtImage from '../../assets/boysTShirtImage.png'; // Boys T-Shirt Image
import girlsTShirtImage from '../../assets/girlsTShirtImage.png'; // Girls T-Shirt Image
import boysShortsImage from '../../assets/boysShortsImage.png'; // Boys Shorts Image
import girlsShortsImage from '../../assets/girlsShortsImage.png'; // Girls Shorts Image
import boysJacketImage from '../../assets/boysJacketImage.png'; // Boys Jacket Image
import girlsJacketImage from '../../assets/girlsJacketImage.png'; // Girls Jacket Image
import boysCodsetImage from '../../assets/kidsboycodset.png'; // Boys Cod-set Image
import girlsCodsetImage from '../../assets/kidsgirlcodset.png'; // Girls Cod-set Image
import Wrapper from './styles';

const KidsCategory = () => {
  return (
    <Wrapper className='section1'>
      {/* Hero Image Section */}
      <div className="hero-image">
        <a href='/products?gender=kids' style={{ display: 'block' }}>
          <img src={heroBcg} alt='Kids clothing collection - Image 1' />
        </a>
      </div>

      {/* Kids Section Divided into Boys and Girls - One Below Another */}
      <div className="image-cards">
        {/* Boys Section */}
        <div className="category-section">
          <h3>Boys</h3>
          <div className="cards-container">
            <a href='/products?category=Boys%20T-Shirt' className="image-card">
              <img src={boysTShirtImage} alt="Boys T-Shirts" />
              <div className="card-text">T-Shirts</div>
            </a>
            <a href='/products?category=Boys%20Bottomwears' className="image-card">
              <img src={boysShortsImage} alt="Boys Shorts" />
              <div className="card-text">Bottomwears</div>
            </a>
            <a href='/products?category=Boys%20Jacket' className="image-card">
              <img src={boysJacketImage} alt="Boys Jackets" />
              <div className="card-text">Jackets</div>
            </a>
            <a href='/products?category=Boys%20Cod-Set' className="image-card">
              <img src={boysCodsetImage} alt="Boys Cod-set" />
              <div className="card-text">Cod-set</div>
            </a>
          </div>
        </div>

        {/* Girls Section */}
        <div className="category-section">
          <h3>Girls</h3>
          <div className="cards-container">
            <a href='/products?category=Girls%20T-Shirt' className="image-card">
              <img src={girlsTShirtImage} alt="Girls T-Shirts" />
              <div className="card-text">T-Shirts</div>
            </a>
            <a href='/products?category=Girls%20Bottomwears' className="image-card">
              <img src={girlsShortsImage} alt="Girls Shorts" />
              <div className="card-text">Bottomwears</div>
            </a>
            <a href='/products?category=Girls%20Jacket' className="image-card">
              <img src={girlsJacketImage} alt="Girls Jackets" />
              <div className="card-text">Jackets</div>
            </a>
            <a href='/products?category=Girls%20Cod-Set' className="image-card">
              <img src={girlsCodsetImage} alt="Girls Cod-set" />
              <div className="card-text">Cod-set</div>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default KidsCategory;
