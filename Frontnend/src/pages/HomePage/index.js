import React, { useEffect } from 'react';
import { FeaturedProducts, Hero } from '../../components';
import MenProducts from '../../components/MenProducts';
import WomenProducts from '../../components/WomenProducts';
import KidsProducts from '../../components/KidsProducts';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Globalization Clothing | Home';
  }, []);

  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <MenProducts />
      <WomenProducts />
      <KidsProducts />
      
    </main>
  );
};

export default HomePage;
