import React from 'react';
import { FormGroup, ControlLabel, Button, ButtonGroup } from 'react-bootstrap';

const OccurrenceMonthDays = ({schedule, label, amountOfDays, onToggleDay}) => {
    return (
        <FormGroup>            
            <ControlLabel>{label}</ControlLabel>
            <ButtonGroup>
                {[...Array(amountOfDays).keys()].map((dummy, index) => {
                    let isActive = schedule.occurs.indexOf(index + 1) > -1;
                    return <Button key={index + 1} 
                            bsSize="xsmall"
                            active={isActive}
                            onClick={() => onToggleDay(index + 1,!isActive)}>{index + 1}</Button>
                })}
            </ButtonGroup>            
        </FormGroup>
    )
};

export default OccurrenceMonthDays

//<Button key={index + 1} bsSize="xsmall" active={this.state.occursDays && this.state.occursDays.indexOf(index + 1) > -1}>{index + 1}</Button>
