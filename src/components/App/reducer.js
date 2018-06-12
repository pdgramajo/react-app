import * as actionTypes from './constants';

const initialState = {
    countries: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_COUNTRIES:
        console.log(action)
            return Object.assign({}, state, {countries: action.data });
        default:
            return state;
    }
}
export default appReducer;