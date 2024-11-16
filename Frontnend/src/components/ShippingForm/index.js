import React, { useState, useEffect } from 'react';
import { Wrapper, WrapperDiv } from './styles';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useOrderContext } from '../../context/order_context';
import { useCartContext } from '../../context/cart_context';
import { Country, State } from 'country-state-city';

const countries = [Country.getCountryByCode('IN')];

function ShippingForm({ confirmShipping }) {
  const {
    shipping: {
      name,
      phone_number,
      address: { line1, postal_code, city, state, country },
    },
    updateShipping,
  } = useOrderContext();
  const { cart } = useCartContext();

  const [states, setStates] = useState([]);

  useEffect(() => {
    // Get the list of states for India using country-state-city package
    const stateData = State.getStatesOfCountry('IN');
    setStates(stateData.map((state) => ({
      value: state.stateCode,
      label: state.name,
    })));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const zipRegex = new RegExp('^[1-9][0-9]{5}$');

    if (!name) {
      return toast.error('Enter your Name');
    }
    if (!phone_number || !/^\d{10}$/.test(phone_number)) {
      return toast.error('Enter your phone number');
    }
    if (!line1) {
      return toast.error('Enter your Address');
    }
    if (!postal_code) {
      return toast.error('Enter your Pin Code');
    }
    if (!zipRegex.test(postal_code)) {
      return toast.error('Enter a valid Pin Code');
    }
    if (!city) {
      return toast.error('Enter your City/District');
    }
    if (!state) {
      return toast.error('Select your State');
    }
    if (!country) {
      return toast.error('Select your Country');
    }
    return confirmShipping();
  };

  if (cart.length < 1) {
    return (
      <WrapperDiv className='page'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
      </WrapperDiv>
    );
  }

  return (
    <Wrapper className='page-100'>
      <div>
        <div className='title'>
          <h2>Shipping</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className='form-control'>
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Full Name'
              value={name}
              onChange={updateShipping}
            />
          </div>

          {/* Phone Number */}
          <div className='form-control'>
            <input
              type='number'
              name='phone_number'
              className='input'
              placeholder='Phone Number'
              value={phone_number}
              onChange={updateShipping}
            />
          </div>

          {/* Address Line 1 */}
          <div className='form-control'>
            <input
              type='text'
              name='line1'
              className='input'
              placeholder='Town/Village'
              value={line1}
              onChange={updateShipping}
            />
          </div>
{/* City/District (Text Input) */}
          <div className='form-control'>
            <input
              type='text'
              name='city'
              className='input'
              placeholder='Town/Village'
              value={city}
              onChange={updateShipping}
            />
          </div>
          {/* Pin Code */}
          <div className='form-control'>
            <input
              type='number'
              name='postal_code'
              className='input'
              placeholder='Pin Code'
              value={postal_code}
              onChange={updateShipping}
            />
          </div>

          

          {/* State Dropdown */}
          <div className='form-control'>
            <select
              name='state'
              className='input sort-input'
              value={state || ''}
              onChange={updateShipping}
            >
              <option value=''>Select State</option>
              {states.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Country Dropdown */}
          <div className='form-control'>
            <select
              name='country'
              className='input sort-input'
              value={country}
              onChange={updateShipping}
            >
              <option value=''>Select Country</option>
              {countries.map((item, index) => (
                <option key={index} value={item.countryCode}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button type='submit' className='btn shipping-btn'>
            Confirm
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

export default ShippingForm;
