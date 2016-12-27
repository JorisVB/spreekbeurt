let nextScheduleId = 4;
export const AddSchedule = () => {
    return {
        type: 'ADD_SCHEDULE',
        id: nextScheduleId++
    }
}

export const ToggleScheduleCollapsed = (id) => {
    return {
        type: 'TOGGLE_SCHEDULE_EXPANDED',
        id
    }
}