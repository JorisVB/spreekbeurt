import {combineReducers} from 'redux';
import schedules from './schedules'
import ui from './ui'

const rootReducer = combineReducers({  
    schedules,
    ui
});

export default rootReducer;