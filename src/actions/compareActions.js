export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const addProductsToComparatorAction = (...productsIds) => ({
  type: ADD_PRODUCTS,
  data: { productsIds }
});

export const removeProductFromComparatorAction = productId => ({
  type: REMOVE_PRODUCT,
  data: { productId }
});
