import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./routes";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>
    , document.getElementById('app')
);

