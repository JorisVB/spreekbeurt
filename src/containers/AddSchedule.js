import React from 'react'
import { connect } from 'react-redux'
import { AddSchedule } from '../actions'
import { Button } from 'react-bootstrap';

let AddScheduleButton = ({dispatch}) => {    
    return (
        <Button onClick={ () => {dispatch(AddSchedule())} }>+</Button>
    )
}
AddScheduleButton = connect()(AddScheduleButton) 

export default AddScheduleButton;