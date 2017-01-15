import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { occurrenceTypes } from './consts';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'

let date = new Date();
let initialState = {
  schedules: [
    {
      id: 1,
      name: "Voorbeeld schedule 1",
      scheduleType: {},      
      occursEveryType: occurrenceTypes.DAILY.key,
      occursEveryAmount: 1,
      occurs: [],
      startDate: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12) // 12h, otherwise the datepicker show a date earlier probably due some UTC stuff
    }
  ], 
  ui: { 
    selectedScheduleId: 1
  }, 
  calendar: {    
    month: date.getMonth(),
    year: date.getFullYear()
  }
}

const store = createStore(rootReducer, initialState);
window.store = store;

ReactDOM.render( 
  <Provider store={store}>   
    <App />
  </Provider>,
  document.getElementById('root')
);
