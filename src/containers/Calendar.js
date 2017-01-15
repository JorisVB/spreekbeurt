import { connect } from 'react-redux'
import { Calendar as CalendarComponent } from '../components/Calendar'
import { IncreaseSelectedMonth } from '../actions'
import { makeDaysList, daysListReducer, formatToRows } from './Helpers/Calendar' 

const mapStateToProps = (state) => {
    let daysList = makeDaysList(state.calendar.month, state.calendar.year),
        decoratedDaysList = state.schedules.reduce(daysListReducer, daysList),
        daysArray = formatToRows(decoratedDaysList);

    return {
        schedules: state.schedules,
        month: state.calendar.month,
        year: state.calendar.year,
        daysArray: [daysArray]
    }
}

const mapDispatchToProps = (dispatch) => ({
    onIncreaseMonth: (amount) => { dispatch(IncreaseSelectedMonth(amount)) }
})

const Calendar = connect(mapStateToProps, mapDispatchToProps)(CalendarComponent);
export default Calendar