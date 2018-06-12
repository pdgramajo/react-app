import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';
import Api from '../api';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk.withExtraArgument(Api))
    );
}