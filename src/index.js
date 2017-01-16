import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'

let date = new Date();
let initialState = {
  schedules: [],
  ui: {
  }, 
  calendar: {    
    month: date.getMonth(),
    year: date.getFullYear()
  }
}

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
window.store = store;

ReactDOM.render( 
  <Provider store={store}>   
    <App />
  </Provider>,
  document.getElementById('root')
);
