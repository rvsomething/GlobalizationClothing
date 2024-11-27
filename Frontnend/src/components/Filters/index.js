import React, { useEffect } from 'react';
import Wrapper from './styles';
import { useFilterContext } from '../../context/filter_context';
import { getUniqueValues, formatPrice } from '../../utils/helpers';
import { FaCheck } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Filters = () => {
  const {
    filters: {
      text,
      gender,
      category,
      color,
      min_price,
      max_price,
      price,
      shipping,
      size
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();
  const location = useLocation();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'gender');
  const colors = getUniqueValues(all_products, 'colors');
  const sizes = getUniqueValues(all_products, 'sizes');
// console.log(sizes);
 // Extract `gender` from the URL query params and set the filter
 useEffect(() => {
  const params = new URLSearchParams(location.search);
  const genderParam = params.get('gender');
  if (genderParam) {
    updateFilters({ target: { name: 'gender', value: genderParam } });
  }
}, [location]);

 // Extract `category` from the URL query params and set the filter
 useEffect(() => {
  const params = new URLSearchParams(location.search);
  const categoryParam = params.get('category');
  console.log(categoryParam);
  if (categoryParam) {
    updateFilters({ target: { name: 'category', value: categoryParam } });
    console.log("updateFilters", categoryParam);
  }
}, [location]);


const genders = ['Men', 'Women', 'Kids'];
  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='search'
              className='search-input'
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end search input */}
          {/* categories input */}
          <div className='form-control'>
            <h5>category</h5>
            <div>
              
              {categories.map((item, index) => {
                return (
                  <button
                    key={index}
                    type='button'
                    name='category'
                    className={`${
                      category === item.toLowerCase() ? 'active' : null
                    }`}
                    onClick={updateFilters}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end categories input */}
          {/* gender input */}
          <div className='form-control'>
            <h5>gender</h5>
            {/* <div>
              {genders.map((item, index) => {
                return (
                  <button
                    key={index}
                    type='button'
                    name='gender'
                    className={`${
                      gender === item.toLowerCase() ? 'active' : null
                    }`}
                    onClick={updateFilters}
                  >
                    {item}
                  </button>
                );
              })}
            </div> */}
            <select
              name='gender'
              id='gender'
              className='gender'
              value={gender}
              onChange={updateFilters}
            >
              {companies.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end gender input */}
          {/* colors input */}
          <div className='form-control'>
            <h5>colors</h5>
            <div className='colors'>
              {colors.map((item, index) => {
                if (item === 'all') {
                  return (
                    <button
                      key={index}
                      name='color'
                      data-color='all'
                      className={`${
                        color === 'all' ? 'all-btn active' : 'all-btn'
                      }`}
                      onClick={updateFilters}
                    >
                      all
                    </button>
                  );
                }

                return (
                  <button
                    key={index}
                    name='color'
                    data-color={item}
                    style={{ background: item }}
                    className={`${
                      color === item ? 'color-btn active' : 'color-btn'
                    }`}
                    onClick={updateFilters}
                  >
                    {color === item && <FaCheck />}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end colors input */}
          {/* sizes input */}
          <div className='form-control'>
            <h5>sizes</h5>
            <div className='sizes'>
              {sizes.map((item, index) => {
                if (item === 'all') {
                  return (
                    <button
                      key={index}
                      name='size'
                      data-size='all'
                      className={`${
                        size === item.toLowerCase() ? 'active' : null
                      }`}
                      onClick={updateFilters}
                    >
                      all
                    </button>
                  );
                }

                return (
                  <button
                    key={index}
                    name='size'
                    data-size={item}
                    // style={{ background: item }}
                    className={`${
                      size === item
                    }`}
                    onClick={updateFilters}
                  >
                    {item }
                  </button>
                );
              })}
            </div>
          </div>
          {/* end sizes input */}
          {/* price input */}
          <div className='form-control'>
            <h5>price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              id='price'
              min={min_price}
              max={max_price}
              value={price}
              onChange={updateFilters}
            />
          </div>
          {/* end price input */}
          {/* shiping input */}
          <div className='form-control shipping'>
            <label htmlFor='shipping'>free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
          {/* end shipping input */}
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          clear filters
        </button>
      </div>
      
    </Wrapper>
  );
};

export default Filters;
