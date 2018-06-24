import {
    LOAD_PRODUCTS_FAILURE,
    LOAD_PRODUCTS_START,
    LOAD_PRODUCTS_SUCCESS
} from '../actions/productActions';

const initialState = {
    items: [],
    productsLoading: false,
    error: null,
};

const products = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_PRODUCTS_FAILURE:
        return Object.assign({}, initialState, {
            productsLoading: false,
            error: action.data.error,
        });
    
    case LOAD_PRODUCTS_START:
        return Object.assign({}, initialState, {
            productsLoading: true,
        });

    case LOAD_PRODUCTS_SUCCESS:
        return Object.assign({}, initialState, {
            items: action.data.products,
            productsLoading: false,
        });

    default:
      return state;
  }
};

export default products;
