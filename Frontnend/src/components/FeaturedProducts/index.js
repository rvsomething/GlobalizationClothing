import React from 'react';
import { useProductsContext } from '../../context/products_context';
import { Link } from 'react-router-dom';
import Wrapper from './styles';
import Error from '../Error/';
import Loading from '../Loading/';
import Product from '../Product/';
import './TitleAnimation.css';

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <h1>
  <span class="word">Featured</span>
  <span class="word">Product<span class="superscript">s</span> </span>
</h1>
    <Wrapper className='section'>
    
      <div className='section-center featured'>
        {featured.map((product) => {

          console.log(product);
          return  <Product key={product.id} {...product}  />;

        })}
      </div>
      <br></br>
      <Link to='/products' className='btn'>
        all products
      </Link>
    </Wrapper>
    </div>
  );
};

export default FeaturedProducts;
