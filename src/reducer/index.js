import { combineReducers } from 'redux';
import { homeReducer } from '../pages/home/reducer';
import { aboutReducer } from "../pages/about/reducer";

const rootReducer = combineReducers({
  homeReducer,
  aboutReducer
});
export default rootReducer;
