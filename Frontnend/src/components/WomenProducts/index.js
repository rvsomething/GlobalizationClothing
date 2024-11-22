import React from 'react';
import { useProductsContext } from '../../context/products_context';
import { Link } from 'react-router-dom';
import Wrapper from './styles';
import Error from '../Error';
import Loading from '../Loading';
import Product from '../Product';
import image from '../../assets/women.png';
import "./TitleAnimationWomen.css";
const WomenProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
    products,
  } = useProductsContext();

  const womenProducts = products.filter((product) => product.gender === 'women');

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div
      style={{
      backgroundColor: 'rgb(255 178 225/ 10%)',

        // backgroundImage: `url(${image})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // border: 'solid 2px rgb(255 178 225)',
      }}
    >
      <h3>
        <span className='wordwomen'>Women's</span>
        <span className='wordwomen'>
          Product<span className='superscript'>s</span>{' '}
        </span>
      </h3>
      <Wrapper className='section'>
        <div className='section-center featured'>
          {womenProducts.length > 0 ? (
            womenProducts.map((product) => (
              <Product key={product.id} {...product} />
            ))
          ) : (
            <p>No Women's products available.</p>
          )}
        </div>
        <br />
        <Link to='/products?gender=women' className='btn'>
          all products
        </Link>
      </Wrapper>
    </div>
  );
};

export default WomenProducts;
