import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import { exampleSchedules } from './example-schedules'

let date = new Date();

const store = createStore(rootReducer, 
{schedules: exampleSchedules, 
  ui: { 
    selectedScheduleId: 1 
  }, 
  calendar: {    
    month: date.getMonth(),
    year: date.getFullYear()
  }});
window.store = store;

ReactDOM.render( 
  <Provider store={store}>   
    <App />
  </Provider>,
  document.getElementById('root')
);
