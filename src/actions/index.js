let nextScheduleId = 4;
export const AddSchedule = () => {
    return {
        type: 'ADD_SCHEDULE',
        id: nextScheduleId++
    }
}

export const SetSelectedSchedule = (id) => {    
    return {
        type: 'SET_SELECTED_SCHEDULE',
        id
    }
}

export const SetScheduleType = (id, scheduleType) => {
    return {
        type: 'SET_SCHEDULE_TYPE',
        id,
        scheduleType        
    }
}

export const SetScheduleName = (id, name) => ({    
        type: 'SET_SCHEDULE_NAME',
        id,
        name    
})

export const SetOccursEveryAmount = (id, amount) => ({    
        type: 'SET_SCHEDULE_OCCURS_EVERY_AMOUNT',
        id,
        amount    
})

export const SetOccurrenceType = (id, occurrenceType) => ({    
        type: 'SET_SCHEDULE_OCCURS_EVERY_TYPE',
        id,
        occurrenceType    
})

export const ToggleDay = (id, day, checked) => ({    
        type: 'SET_SCHEDULE_TOGGLE_DAY',
        id,
        day,
        checked
})

export const IncreaseSelectedMonth = (amount) => ({
        type: 'INCREASE_SELECTED_MONTH',
        amount: amount
})