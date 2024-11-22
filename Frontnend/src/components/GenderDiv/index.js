import React from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';

const GenderDiv = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h4>
          <Link to='/men'>Men</Link>
          <Link to='/women'>Women</Link>
          <Link to='/kids'>Kids</Link>          
        </h4>
      </div>
    </Wrapper>
  );
};

export default GenderDiv;
