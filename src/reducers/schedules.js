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
                scheduleType: state.scheduleType
            })
        default:
            return state
    }
}

const schedules = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SCHEDULE':
            return [...state, schedule(undefined, action)]        
        case 'SET_SCHEDULE_TYPE':
            return state.map(sch => schedule(sch, action))
        default:
            return state
    }
}

export default schedules