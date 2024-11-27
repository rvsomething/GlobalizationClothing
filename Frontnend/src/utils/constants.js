import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillGithub,
} from 'react-icons/ai';

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  // {
  //   id: 3,
  //   text: 'products',
  //   url: '/products?gender=all',
  //   submenu: [
  //         { id: 1, text: 'Men', url: '/products?gender=men' },
  //         { id: 2, text: 'Women', url: '/products?gender=women' },
  //         { id: 3, text: 'Kids', url: '/products?gender=kids' },
          
  //       ],
  // },
  {
    id: 4,
    text: 'men',
    url: '/men',
    // submenu: [
    //   { id: 1, text: 'T-Shirts', url: '/products/men/tshirts' },
    //   { id: 2, text: 'Pants', url: '/products/men/pants' },
    //   { id: 3, text: 'Shirts', url: '/products/men/shirts' },
    //   { id: 4, text: 'Jeans', url: '/products/men/jeans' },
    // ],
  },
  {
    id: 5,
    text: 'women',
    url: '/women',
    // submenu: [
    //   { id: 1, text: 'Dresses', url: '/products/women/dresses' },
    //   { id: 2, text: 'T-Shirts', url: '/products/women/tshirts' },
    //   { id: 3, text: 'Pants', url: '/products/women/pants' },
    //   { id: 4, text: 'Jeans', url: '/products/women/jeans' },
    // ],
  },
  {
    id: 6,
    text: 'kids',
    url: '/kids',
    // submenu: [
    //   { id: 1, text: 'T-Shirts', url: '/products/kids/tshirts' },
    //   { id: 2, text: 'Pants', url: '/products/kids/pants' },
    //   { id: 3, text: 'Shirts', url: '/products/kids/shirts' },
    //   { id: 4, text: 'Jeans', url: '/products/kids/jeans' },
    // ],
  },
];


export const socialLinks = [
  {
    id: 1,
    icon: <AiFillGithub className='github' color='var(--clr-primary-5)' fontSize='2.5rem' />,
    text: 'GitHub',
    url: '',
  },
  {
    id: 2,
    icon: (
      <AiFillLinkedin className='linkedin' color='var(--clr-primary-5)' fontSize='2.5rem' />
    ),
    text: 'LinkedIn',
    url: '',
  },
  {
    id: 3,
    icon: (
      <AiFillTwitterCircle
        className='twitter'
        color='var(--clr-primary-5)'
        fontSize='2.5rem'
      />
    ),
    text: 'Twitter',
    url: '',
  },
  {
    id: 4,
    icon: (
      <AiFillYoutube className='youtube' color='var(--clr-primary-5)' fontSize='2.5rem' />
    ),
    text: 'YouTube',
    url: '',
  },
];

export const footerLinks = [
  {
    id: 1,
    text: 'Home',
    url: '/',
  },
  {
    id: 2,
    text: 'About',
    url: '/about',
  },
  {
    id: 3,
    text: 'Men',
    url: '/men',
  },
  {
    id: 4,
    text: 'Women',
    url: '/women',
  },
  {
    id: 5,
    text: 'Kids',
    url: '/kids',
  },
  {
    id: 6,
    text: 'Orders',
    url: '/orders',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Our mission is to provide our customers the best in class products and services at a very reasonable price.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Our vision is to take Globalization Clothingto greater heights, by providing our customers best in class service.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: `Globalization Clothingwas started in December'21 with an initial aim to provide the best in class services to our customers.`,
  },
];

const domain = process.env.REACT_APP_BACKEND_HOST; 
export const products_url = `${domain}/api/products`;
export const single_product_url = `${domain}/api/products/`;
export const create_order_url = `${domain}/api/orders/new`;
export const get_order_url = `${domain}/api/orders`;
export const payment_url = `${domain}/api/payment/create-payment-intent`;
export const upload_url = `${domain}/api/upload/`;
export const default_profile_image =
  'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg';
