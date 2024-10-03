import React from 'react';
import Wrapper from './styles';
import { formatPrice } from '../../utils/helpers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className='container'>
        
        <Link to={`/products/${id}`} >
        
         <img src={image} alt='main' />
        
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

export default Product;

// import React from 'react';
// import Wrapper from './styles';
// import { formatPrice } from '../../utils/helpers';
// import { Link } from 'react-router-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

// const Product = ({ images,image, name, price, id }) => {
//   // console.log('Images:', image);
//   return (
//     <Wrapper>
//       <div className='container'>
//         <Link to={`/products/${id}`}>
//           <Carousel showThumbs={false} autoPlay infiniteLoop>
//             {images.map((image, index) => (
//               <div key={index}>
//                 <img src={image.url} alt={`Product ${index + 1}`} />
//               </div>
//             ))}
//           </Carousel>
//         </Link>
//       </div>
//       <footer>
//         <h5>{name}</h5>
//         <p>{formatPrice(price)}</p>
//       </footer>
//     </Wrapper>
//   );
// };

// Product.defaultProps = {
//   images: []
// };

// export default Product;
