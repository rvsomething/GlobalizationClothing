import React from 'react';
import {
  FaHome,
  FaProductHunt,
  FaShoppingCart,
  FaUserTie,
} from 'react-icons/fa';

export const LinkItems = [
  { name: 'Home', url: '/', icon: <FaHome /> },
  { name: 'Products', url: '/products', icon: <FaProductHunt /> },
  { name: 'Orders', url: '/orders', icon: <FaShoppingCart /> },
  { name: 'Admins', url: '/admins', icon: <FaUserTie /> },
];

export const orderStatusList = [
  { name: 'Reject', value: 'rejected' },
  { name: 'Processing', value: 'processing' },
  { name: 'Confirmed', value: 'confirmed' },
  { name: 'Shipped', value: 'shipped' },
  { name: 'Delivered', value: 'delivered' },
];

// export const domain = process.env.REACT_APP_BACKEND_HOST;
export const auth_url = `http://localhost:5000/api/admin/auth`;
export const login_url = `http://localhost:5000/api/admin/login`;
export const register_url = `http://localhost:5000/api/admin/register`;
export const logout_url = `http://localhost:5000/api/admin/logout`;
export const orders_url = `http://localhost:5000/api/admin/orders`;
export const update_product_url = `http://localhost:5000/api/admin/product/`;
export const products_url = `http://localhost:5000/api/products/`;
export const admins_url = `http://localhost:5000/api/admin/users/`;
export const single_order_url = `http://localhost:5000/api/orders/`;
export const update_order_status = `http://localhost:5000/api/admin/order/`;
export const create_new_product = `http://localhost:5000/api/admin/product/new`;
export const delete_review = `http://localhost:5000/api/admin/product/review/`;
