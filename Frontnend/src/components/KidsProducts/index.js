import React from 'react';
import { useProductsContext } from '../../context/products_context';
import { Link } from 'react-router-dom';
import Wrapper from './styles';
import Error from '../Error';
import Loading from '../Loading';
import Product from '../Product';
import image from '../../assets/kids.png';
import "./TitleAnimationKids.css"
const KidsProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
    products,
  } = useProductsContext();
  const kidsProducts = products.filter((product) => product.gender === 'kids');

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div
    style={{
      backgroundColor: 'rgb(239 219 95 / 10%)',
      // backgroundImage: `url(${image})`,
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'cover',
      // border: 'solid 2px rgb(239 219 95)',
    }}
  >
    <h3>
      <span className='wordkids'>Kid's</span>
      <span className='wordkids'>
        Product<span className='superscript'>s</span>{' '}
      </span>
    </h3>
    <Wrapper className='section'>
      <div className='section-center featured'>
        {kidsProducts.length > 0 ? (
          kidsProducts.map((product) => (
            <Product key={product.id} {...product} />
          ))
        ) : (
          <p>No Kid's products available.</p>
        )}
      </div>
      <br />
      <Link to='/products?gender=kids' className='btn'>
        all products
      </Link>
    </Wrapper>
  </div>
  );
};

export default KidsProducts;
