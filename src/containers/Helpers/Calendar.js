
import { occurrenceTypes, scheduleTypes } from '../../consts'
const dayLengthMs = 1000 * 60 * 60 * 24;

// --- makeDaysList

export const makeDaysList = (month, year) => {
    let amountOfDays = new Date(year, month + 1, 0).getDate(),
        firstDay = new Date(year, month, 1).getDay();
    var days = [];
    let workdays = 0;
    for (var i = 1; i <= amountOfDays; i++) {
        let weekDay = (firstDay + i - 1) % 7,
            workDay = [1, 2, 3, 4, 5].indexOf(weekDay) >= 0 ? (++workdays) : -1;
        days.push({
            dateDay: i,
            weekDay,
            workDay,
            style: '',
            date: new Date(year, month, i)
        });
    }
    return days;
}

// --- formatToRows

export const formatToRows = (decoratedDaysList) => {
    let formatted = [[]];
    for (let i = 0; i < 5; i++) {
        let row = [];
        for (let j = 0; j < 7; j++) {
            row[j] = (decoratedDaysList.length > 0 && decoratedDaysList[0].weekDay === j) ? decoratedDaysList.shift() : {};
        }
        formatted[i] = row;
    }
    return formatted;
}

// --- daysListReducer

const IsBefore = (day1, day2) => {
    var isBefore = new Date(day1.getFullYear(), day1.getMonth(), day1.getDate()) < new Date(day2.getFullYear(), day2.getMonth(), day2.getDate());    
    return isBefore;
}

const SetHasScheduled = (schedule, day) => {

    if(IsBefore(day.date, schedule.startDate)) {           
        return day;        
    }
    switch (schedule.scheduleType) {
        case scheduleTypes.ADD.key:
            return Object.assign({}, day, { className: "hasScheduled" });
        case scheduleTypes.CANCEL.key:
            return Object.assign({}, day, { className: "" });
        default:
            return day;
    }
}

const SetDayIsScheduledForTypeDaily = (schedule, day) => {
    let daysBetween = Math.round((day.date - schedule.startDate) / dayLengthMs); // Not sure if this is save re: daylightsaving and other common problems with date stuff, did not check
    if (daysBetween % schedule.occursEveryAmount === 0) {
        return SetHasScheduled(schedule, day);
    }
    return day;
}

const SetDayIsScheduledForTypeWeekly = (schedule, day) => {    
    if (schedule.occurs.indexOf(day.weekDay) >= 0) {        
        return SetHasScheduled(schedule, day);
    }
    return day;
}

const SetDayIsScheduledForTypeMonthly = (schedule, day) => {
    if(schedule.occurs.indexOf(day.dateDay) >= 0) {
        return SetHasScheduled(schedule, day);
    }
    return day;
}

const SetDayIsScheduledForTypeMonthlyWorkdays = (schedule, day) => {
    if(schedule.occurs.indexOf(day.workDay) >= 0) {
        return SetHasScheduled(schedule, day);
    }
    return day;
}

export const daysListReducer = (daysList, schedule) => {
    return daysList.map(day => {
        switch (schedule.occursEveryType) {
            case occurrenceTypes.DAILY.key:
                return SetDayIsScheduledForTypeDaily(schedule, day);
            case occurrenceTypes.WEEKLY.key:
                return SetDayIsScheduledForTypeWeekly(schedule, day);
            case occurrenceTypes.MONTHLY.key:
                return SetDayIsScheduledForTypeMonthly(schedule, day);
            case occurrenceTypes.MONTHLY_WORKDAYS.key:
                return SetDayIsScheduledForTypeMonthlyWorkdays(schedule, day);
            default:
                return day;
        }
    });
}