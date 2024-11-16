import React from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h4>
          <Link to='/'>Home</Link>
          {product && <Link to='/products'>/ products</Link>}/ {title}
        </h4>
      </div>
    </Wrapper>
  );
};

export default PageHero;
