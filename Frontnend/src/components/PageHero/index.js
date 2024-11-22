import React, { useEffect } from 'react';
import Wrapper from './styles';
import { Link, useLocation } from 'react-router-dom';


// const location = useLocation();

 // Extract `gender` from the URL query params and set the filter
//  useEffect(() => {
//   const params = new URLSearchParams(location.search);
//   const genderParam = params.get('gender');
//   if (genderParam) {
//     updateFilters({ target: { name: 'gender', value: genderParam } });
//   }
// }, [location]);

// const genders = ['Men', 'Women', 'Kids'];

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
