import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      const maxPrice = Math.max(...action.payload.map((product) => product.price));
      const minPrice = Math.min(...action.payload.map((product) => product.price));

      return {
        ...state,
        all_products: action.payload,
        filtered_products: action.payload,
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice, min_price: minPrice },
      };
    }

    case SET_GRIDVIEW:
      return { ...state, grid_view: true };

    case SET_LISTVIEW:
      return { ...state, grid_view: false };

    case UPDATE_SORT:
      return { ...state, sort: action.payload };

    case SORT_PRODUCTS: {
      const { sort, filtered_products } = state;
      let tempProducts = [...filtered_products];

      if (sort === 'price-lowest') tempProducts.sort((a, b) => a.price - b.price);
      if (sort === 'price-highest') tempProducts.sort((a, b) => b.price - a.price);
      if (sort === 'name-a') tempProducts.sort((a, b) => a.name.localeCompare(b.name));
      if (sort === 'name-z') tempProducts.sort((a, b) => b.name.localeCompare(a.name));

      return { ...state, filtered_products: tempProducts };
    }

    case UPDATE_FILTERS: {
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    }

    case FILTER_PRODUCTS: {
      const { filters, all_products } = state;
      const { text, category, gender, color, size, price, shipping } = filters;

      let tempProducts = [...all_products];

      if (text) {
        tempProducts = tempProducts.filter((product) => product.name.toLowerCase().includes(text.toLowerCase()));
      }

      if (category !== 'all') {
        tempProducts = tempProducts.filter((product) => product.category === category);
      }

      if (gender !== 'all') {
        tempProducts = tempProducts.filter((product) => product.gender === gender);
      }

      if (color !== 'all') {
        tempProducts = tempProducts.filter((product) => product.colors.includes(color));
      }

      if (size !== 'all') {
        tempProducts = tempProducts.filter((product) => product.sizes.includes(size));
      }

      tempProducts = tempProducts.filter((product) => product.price <= price);

      if (shipping) {
        tempProducts = tempProducts.filter((product) => product.shipping === true);
      }

      return { ...state, filtered_products: tempProducts };
    }

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          text: '',
          gender: 'all',
          category: 'all',
          color: 'all',
          size: 'all',
          price: state.filters.max_price,
          shipping: false,
        },
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
