const schedule = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_SCHEDULE':
            return {
                id: action.id,
                text: action.text,
                collapsed: false
            }
        case 'TOGGLE_SCHEDULE_EXPANDED':
            if (state.id !== action.id) {
                return state
            }            
            return Object.assign({}, state, {
                expanded: !state.expanded
            })

        default:
            return state
    }
}

const schedules = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SCHEDULE':
            return [...state, schedule(undefined, action)]
        case 'TOGGLE_SCHEDULE_EXPANDED':
            return state.map(sch => schedule(sch, action))
        default:
            return state
    }
}

export default schedules