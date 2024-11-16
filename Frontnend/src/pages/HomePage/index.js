import React, { useEffect } from 'react';
import { FeaturedProducts, Hero } from '../../components';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Globalization Clothing | Home';
  }, []);

  return (
    <main>
      <Hero />
      <FeaturedProducts />
      
    </main>
  );
};

export default HomePage;
