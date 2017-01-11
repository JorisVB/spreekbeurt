import { occurrenceTypes } from '../consts';

const schedule = (state = {}, action) => {
    if (state.id !== action.id) {
        return state
    } 
    switch(action.type) {        
        case 'SET_SCHEDULE_TYPE':                  
            return Object.assign({}, state, {
                scheduleType: action.scheduleType
            })
        case 'SET_SCHEDULE_NAME':            
            return Object.assign({}, state, {
                name: action.name
            })
        case 'SET_SCHEDULE_HOURS':            
            return Object.assign({}, state, {
                hours: action.hours
            })
        case 'SET_SCHEDULE_OCCURS_EVERY_TYPE':               
            return Object.assign({}, state, {
                occursEveryType: action.occurrenceType,
                occurs: []
            })
        case 'SET_SCHEDULE_OCCURS_EVERY_AMOUNT':     
            return Object.assign({}, state, {
                occursEveryAmount: action.amount
            })
        case 'SET_SCHEDULE_TOGGLE_DAY':                                 
            let occurs = state.occurs;            
            let newOccurs = occurs;
            let index = occurs.indexOf(action.day);            
            if(action.checked === true) {
                if(index < 0) {
                   newOccurs = [...occurs, action.day]; // spread in nieuwe array, dus immutable
                }
            } else {                                
                newOccurs = occurs.filter(o => o !== action.day); // filter geeft nieuwe array, dus immutable                
            } 
            return Object.assign({}, state, {
                occurs: newOccurs
            })
        default:
            return state
    }
}

const newSchedule = (id) => {
    return {
        id: id,
        name: `New schedule (${id})`,        
        hours: [],
        occursEveryType: occurrenceTypes.DAILY.key,
        occursEveryAmount: 1,    
        occurs: [],        
    }
}

const schedules = (state = [], action) => {    
    switch (action.type) {
        case 'ADD_SCHEDULE':
            return [...state, newSchedule(action.id)]
        case 'SET_SCHEDULE_TYPE':
        case 'SET_SCHEDULE_NAME':
        case 'SET_SCHEDULE_HOURS': 
        case 'SET_SCHEDULE_OCCURS_EVERY_TYPE':
        case 'SET_SCHEDULE_OCCURS_EVERY_AMOUNT':       
        case 'SET_SCHEDULE_TOGGLE_DAY':
        case 'SET_SCHEDULE_STARTDATE':
        case 'SET_SCHEDULE_EFFECTIVE_FROM':
        case 'SET_SCHEDULE_EFFECTIVE_TO':
            return state.map(sch => schedule(sch, action))        
        default:
            return state
    }
}

export default schedules