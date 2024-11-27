import React, { useEffect } from 'react';
import { FeaturedProducts, Hero } from '../../components';
import MenProducts from '../../components/MenProducts';
import WomenProducts from '../../components/WomenProducts';
import KidsProducts from '../../components/KidsProducts';
import BrandSlider from '../../components/BrandSlider';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Globalization Clothing | Home';
  }, []);

  return (
    <main>
      <Hero />
      <BrandSlider />
      <MenProducts />
      <FeaturedProducts />

      {/* <WomenProducts /> */}
      {/* <KidsProducts /> */}

      
      
    </main>
  );
};

export default HomePage;
