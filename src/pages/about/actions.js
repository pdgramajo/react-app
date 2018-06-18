import * as actionTypes from './constants';

export const getProducts = () => (dispatch, getState, api) => {
  api.Get('products?_page=1&_limit=20').then(response =>
    dispatch({ type: actionTypes.LOAD_PRODUCTS, data: response.data }));
};

export const getProductById = id => (dispatch, getState, api) => {
  api.Get(`products/${id}`).then(response =>
    dispatch({ type: actionTypes.GET_PRODUCT_BY_ID, data: response.data }));
};
