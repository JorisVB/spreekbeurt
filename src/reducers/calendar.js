const calendar = (state = [], action) => {    
    switch (action.type) {        
        case 'INCREASE_SELECTED_MONTH':
            let year = state.year,
                month = state.month;
                        
            month = state.month + action.amount;
            year = state.year + Math.floor(month/12);
            month = month > 0 ? month % 12 : 12 + month % 12;

            return Object.assign({}, state, {
                month,
                year
            })
        default:
            return state
    }
}

export default calendar