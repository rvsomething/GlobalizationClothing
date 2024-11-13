import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {
  AdminsPage,
  Dashboard,
  LoginPage,
  OrdersPage,
  PrivateRoute,
  ProductsPage,
  SingleOrderPage,
  SingleProductPage,
} from './pages';
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/'>
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path='/orders'>
          <OrdersPage />
        </PrivateRoute>
        <PrivateRoute exact path='/orders/:id'>
          <SingleOrderPage />
        </PrivateRoute>
        <PrivateRoute exact path='/products'>
          <ProductsPage />
        </PrivateRoute>
        <PrivateRoute exact path='/products/:id'>
          <SingleProductPage />
        </PrivateRoute>
        <PrivateRoute exact path='/admins'>
          <AdminsPage />
        </PrivateRoute>
        <PrivateRoute exact path='/login'>
          <LoginPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
