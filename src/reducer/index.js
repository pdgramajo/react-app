import { combineReducers } from 'redux';
import appReducer from '../components/App/reducer';
// import usuariosReducer from '../usuarios/usuariosReducer';
// import aboutReducer from '../about/aboutReducer';
// import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
    appReducer
//    peopleReducer ,
//    usuariosReducer ,
//    aboutReducer,
//    form: reduxFormReducer
});
export default rootReducer ;