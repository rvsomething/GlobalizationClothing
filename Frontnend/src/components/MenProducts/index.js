import React from 'react';
import { useProductsContext } from '../../context/products_context';
import { Link } from 'react-router-dom';
import Wrapper from './styles';
import './TitleAnimationMen.css';
import Error from '../Error';
import Loading from '../Loading';
import Product from '../Product';
import image from '../../assets/men.png';
const MenProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
    products,
  } = useProductsContext();
  const menProducts = products.filter((product) => product.gender === 'men');

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div
    style={{
      backgroundColor: 'rgb(26 115 232 / 10%)',

      // backgroundImage: `url(${image})`,
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'cover',
      // border: 'solid 2px rgb(26 115 232)',
    }}
  >
    <h3>
      <span className='wordmen'>Men</span>
      <span className='wordmen'>
        Product<span className='superscript'>s</span>{' '}
      </span>
    </h3>
    <Wrapper className='section'>
      <div className='section-center featured'>
        {menProducts.length > 0 ? (
          menProducts.map((product) => (
            <Product key={product.id} {...product} />
          ))
        ) : (
          <p>No Men's products available.</p>
        )}
      </div>
      <br />
      <Link to='/products?gender=men' className='btn'>
        all products
      </Link>
    </Wrapper>
  </div>
  );
};

export default MenProducts;
