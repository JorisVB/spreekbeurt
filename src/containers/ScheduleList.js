import { connect } from 'react-redux'
import { ScheduleList as ScheduleListComponent } from '../components/ScheduleList'
import { SetSelectedSchedule, RemoveSchedule } from '../actions'

const mapStateToProps = (state) => ({    
    schedules: state.schedules,
    selectedScheduleId: state.ui.selectedScheduleId
})

const mapDispatchToProps = (dispatch) => ({    
    onSelectSchedule: (scheduleId) => { dispatch(SetSelectedSchedule(scheduleId))},
    onRemoveSchedule: (scheduleId) => { dispatch(RemoveSchedule(scheduleId))}
})

const ScheduleList = connect(mapStateToProps, mapDispatchToProps)(ScheduleListComponent);
export default ScheduleList