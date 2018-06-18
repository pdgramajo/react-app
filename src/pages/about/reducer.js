import * as actionTypes from './constants';

const initialState = {
  products: [],
  product: {}
};

export const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return Object.assign({}, state, { products: action.data });
    case actionTypes.GET_PRODUCT_BY_ID:
      return Object.assign({}, state, { product: action.data });
    default:
      return state;
  }
};

