import * as actionTypes from './constants';

const getCountries = () => (dispatch, getState, api) => {
  api.Get('Countries').then(response =>
    dispatch({ type: actionTypes.LOAD_COUNTRIES, data: response.data }));
};

export default { getCountries };
