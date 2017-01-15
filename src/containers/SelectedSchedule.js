import { connect } from 'react-redux'
import ScheduleDetails from '../components/ScheduleDetails'
import * as Actions from '../actions'

const mapStateToProps = (state) => ({    
    schedule: state.schedules.filter( s => s.id === state.ui.selectedScheduleId)[0]
})

const mapDispatchToProps = (dispatch) => ({    
    onSelectScheduleType: (scheduleId, scheduleType) => { dispatch(Actions.SetScheduleType(scheduleId, scheduleType))},
    onSetName: (scheduleId, name) => { dispatch(Actions.SetScheduleName(scheduleId, name))},
    onSetOccursEveryAmount: (scheduleId, amount) => { dispatch(Actions.SetOccursEveryAmount(scheduleId, amount))},
    onSetOccurrenceType: (scheduleId, occurrenceType) => { dispatch(Actions.SetOccurrenceType(scheduleId, occurrenceType))},
    onToggleDay: (scheduleId, weekday, checked) => { dispatch(Actions.ToggleDay(scheduleId, weekday, checked)) },
    onSetStartDate: (scheduleId, startDate) => { dispatch(Actions.SetStartDate(scheduleId, startDate)) },
})

const SelectedScheduleDetails = connect(mapStateToProps, mapDispatchToProps)(ScheduleDetails);
export default SelectedScheduleDetails