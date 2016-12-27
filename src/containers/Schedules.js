import { connect } from 'react-redux'
import { ToggleScheduleCollapsed } from '../actions'
import { SchedulePanels } from '../components/SchedulePanels'

const mapStateToProps = (state) => ({    
    schedules: state.schedules
})

const mapDispatchToProps = ({
    onToggle: ToggleScheduleCollapsed
})

const Schedules = connect(mapStateToProps,mapDispatchToProps)(SchedulePanels);

export default Schedules