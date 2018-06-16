import * as actionTypes from './constants';

const initialState = {
  products: []
};

export const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return Object.assign({}, state, { products: action.data });
    default:
      return state;
  }
};

