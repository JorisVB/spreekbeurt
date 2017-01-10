const ui = (state = [], action) => {    
    switch (action.type) {        
        case 'SET_SELECTED_SCHEDULE':
            return Object.assign({}, state, {
                selectedScheduleId: action.id
            })
        default:
            return state
    }
}

export default ui