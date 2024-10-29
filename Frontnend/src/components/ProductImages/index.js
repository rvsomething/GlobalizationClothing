import React, { useState } from 'react';
import Wrapper from './styles';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; // Import styles for zoom

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <Zoom>
        <img
          src={main.url}
          alt="main"
          className="main"
          style={{ width: '100%', cursor: 'pointer' }} // Set width and cursor for better UX
        />
      </Zoom>
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              className={`${image.url === main.url ? 'active' : ''}`}
              key={index}
              onClick={() => {
                setMain(images[index]);
              }}
              style={{ cursor: 'pointer' }} // Add pointer cursor for thumbnails
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ProductImages;
