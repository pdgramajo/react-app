import * as actionTypes from './constants';

export const getCountries = () => {
    return (dispatch, getState, api) => {
        return api.Get('Countries').then(
            response => dispatch({ type: actionTypes.LOAD_COUNTRIES, data: response.data })
        );
    }
} 