import * as actionTypes from './constants';

export function getCountries() {
    return (dispatch,getState,api) => {
                return api.Get('Countries','id=1&id=2').then(
                    x=>dispatch({ type: actionTypes.LOAD_COUNTRIES, data:x.data})
                );
    }
} 