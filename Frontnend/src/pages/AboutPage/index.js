import React, { useEffect } from 'react';
import Wrapper from './styles';
import { PageHero } from '../../components';
import {  Services, Contact } from '../../components';


const AboutPage = () => {
  useEffect(() => {
    document.title = 'Globalization Clothing | About';
  }, []);

  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        {/* <img src={aboutImg} alt='pic' /> */}
        <article>
          <div className='title'>
            <h2>My Story</h2>
            <div className='underline'></div>
          </div>
          <p>
            This e-commerce platform was launched by Shivam Kumar in December 2021 with the
            vision of building a robust infrastructure for small business owners
            to expand their reach by bringing their products online. Today, it
            serves hundreds of shop owners, helping them grow their businesses.
            This success is thanks to your trust, support, and our dedicated
            efforts to enhance the platform continuously. We are working
            tirelessly to improve the experience for our users and aim to reach
            over 1,000 customers soon.
          </p>
        </article>
      </Wrapper>
      <Services />
      <Contact />
    </main>
  );
};

export default AboutPage;
