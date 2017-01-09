const schedule = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_SCHEDULE':
            return {
                id: action.scheduleId,
                text: action.text,
                collapsed: false
            }        
        case 'SET_SCHEDULE_TYPE':
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                scheduleType: action.scheduleType
            })
        case 'SET_SCHEDULE_NAME':
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                name: action.name
            })
        case 'SET_SCHEDULE_HOURS':
            if (state.id !== action.id) {
                return state
            } 
            return Object.assign({}, state, {
                hours: action.hours
            })
        // case 'SET_SCHEDULE_OCCURS_EVERY_TYPE':
        //     if (state.id !== action.id) {
        //         return state
        //     }
        //     return Object.assign({}, state, {
        //         hours: action.hours
        //     })
        // case 'SET_SCHEDULE_OCCURS_EVERY_AMOUNT':
        //     if (state.id !== action.id) {
        //         return state
        //     }       
        // case 'SET_SCHEDULE_OCCURS':
        //     if (state.id !== action.id) {
        //         return state
        //     }
        // case 'SET_SCHEDULE_STARTDATE':
        //     if (state.id !== action.id) {
        //         return state
        //     }
        // case 'SET_SCHEDULE_EFFECTIVE_FROM':
        //     if (state.id !== action.id) {
        //         return state
        //     }
        // case 'SET_SCHEDULE_EFFECTIVE_TO':
        //     if (state.id !== action.id) {
        //         return state
        //     }    
        default:
            return state
    }
}

const schedules = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SCHEDULE':
            return [...state, schedule(undefined, action)]        
        case 'SET_SCHEDULE_TYPE':
        case 'SET_SCHEDULE_NAME':
        case 'SET_SCHEDULE_HOURS': 
        case 'SET_SCHEDULE_OCCURS_EVERY_TYPE':
        case 'SET_SCHEDULE_OCCURS_EVERY_AMOUNT':       
        case 'SET_SCHEDULE_OCCURS':
        case 'SET_SCHEDULE_STARTDATE':
        case 'SET_SCHEDULE_EFFECTIVE_FROM':
        case 'SET_SCHEDULE_EFFECTIVE_TO':
            return state.map(sch => schedule(sch, action))
        default:
            return state
    }
}

export default schedules