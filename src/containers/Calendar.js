import { connect } from 'react-redux'
import { Calendar as CalendarComponent } from '../components/Calendar'
import { IncreaseSelectedMonth } from '../actions'
import { occurrenceTypes } from '../consts'

// const makeDaysArray = (month, year) => {
//     var amountOfDays = new Date(year, month+1, 0).getDate(),
//         firstDay = new Date(year, month, 1).getDay(),
//         rows = [],
//         row = [];
    
//     console.log(row);        
//     for(var i=1-firstDay; i<=amountOfDays; i++) {            
//         row.push(i);
//         if((i+firstDay)%7===0) {
//             rows.push(row);
//             row = [];
//         }
//     }
//     rows.push(row);        
//     return rows;
// }

const makeDaysList = (month, year) => {
    let amountOfDays = new Date(year, month+1, 0).getDate(),
        firstDay = new Date(year, month, 1).getDay();
    var days = [];
    let workdays = 0;
    for(var i=1; i<=amountOfDays; i++) {        
        let weekDay = (firstDay + i - 1) % 7,
            workDay = [1,2,3,4,5].indexOf(weekDay) >= 0 ? (++workdays) : -1;
        days.push({
            dateDay: i,
            weekDay,
            workDay,
            style: ''
        });
    }
    return days;
}

const daysListReducer = (daysList, schedule) => {      
    return daysList.map(day => {        
        switch(schedule.occursEveryType) {
            case occurrenceTypes.DAILY.key:
                return Object.assign({}, day, { color: 'green' });
            default:
                return day;
        }        
    });        
}


const mapStateToProps = (state) => {
    let daysList = makeDaysList(state.calendar.month, state.calendar.year),
        decoratedDaysList = state.schedules.reduce(daysListReducer, daysList),
        daysArray = decoratedDaysList;
    
    return {
        schedules: state.schedules,
        month: state.calendar.month,
        year: state.calendar.year,
        daysArray: [daysArray]
    }    
}

const mapDispatchToProps = (dispatch) => ({    
    onIncreaseMonth: (amount) => { dispatch(IncreaseSelectedMonth(amount))}
})

const Calendar = connect(mapStateToProps, mapDispatchToProps)(CalendarComponent);
export default Calendar