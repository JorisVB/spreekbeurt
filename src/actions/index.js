let nextScheduleId = 4;
export const AddSchedule = () => {
    return {
        type: 'ADD_SCHEDULE',
        scheduleId: nextScheduleId++
    }
}

export const SetScheduleType = (scheduleId, scheduleType) => {
    return {
        type: 'SET_SCHEDULE_TYPE',
        scheduleId,
        scheduleType        
    }
}