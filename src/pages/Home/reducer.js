import * as actionTypes from './constants';

const initialState = {
  countries: []
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_COUNTRIES:
      return Object.assign({}, state, { countries: action.data });
    default:
      return state;
  }
};

