import axios from 'axios';
import compose from 'lodash/fp/compose';
import ZamroApi from '../ZamroApi';
import { addProductsToComparatorAction } from './compareActions';

export const LOAD_PRODUCTS_START = 'LOAD_PRODUCTS_START';
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
export const LOAD_PRODUCTS_FAILURE = 'LOAD_PRODUCTS_FAILURE';

export const loadProductsStart = () => ({
  type: LOAD_PRODUCTS_START
});

export const loadProductsSuccess = products => ({
  type: LOAD_PRODUCTS_SUCCESS,
  data: { products }
});

export const loadProductsFailure = error => ({
  type: LOAD_PRODUCTS_FAILURE,
  data: { error }
});

export const loadProducts = (...ids) => dispatch => {
    // I want to show some loading indicator (E.g. Spinner) so we need this action to be dispatched!
    dispatch(loadProductsStart());

    return ZamroApi
        .getProductsByIds(...ids)
        .then(({ data }) => {
          // Dispatch action to store the fetched product in state.
          compose(dispatch, loadProductsSuccess)(data.products);
          // Since we have a specific reducers for the comparator (Because the products may be sued by other part of the application)
          // Since we have the products stored in our state let's not duplicate content and store only the product sky's!
          compose(dispatch, addProductsToComparatorAction)(...data.products.map(product => product.sku));
        })
        // Error object is so big! and we want to keep our state object as flat as possible and also serializable!
        // Thus let's just add the error message to our state.
        .catch(error => compose(dispatch, loadProductsFailure)(error.message))
}