import {
    ADD_PRODUCTS,
    REMOVE_PRODUCT,
} from '../actions/compareActions';

const initialState = {
    productsIds: [],
};

const comparator = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_PRODUCTS:
        return Object.assign({}, state, {
            productsIds: [...state.productsIds, ...action.data.productsIds],
        });

    case REMOVE_PRODUCT:
        return Object.assign({}, state, {
            productsIds: [...state.productsIds.filter(item => item !== action.data.productId)],
        });

    default:
      return state;
  }
};

export default comparator;
