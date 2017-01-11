import {combineReducers} from 'redux';
import schedules from './schedules'
import ui from './ui'
import calendar from './calendar'

const rootReducer = combineReducers({  
    schedules,
    ui,
    calendar
});

export default rootReducer;