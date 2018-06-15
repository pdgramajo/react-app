import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store';
import App from './app';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);

