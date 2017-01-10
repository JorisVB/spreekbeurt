import React from 'react';
import { weekDays } from '../consts';
import { FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';

const OccurrenceWeekDays = ({schedule, onToggleDay}) => {
    return (
        <FormGroup>            
            <ControlLabel>Dagen</ControlLabel>
            {weekDays.map((day, index) =>
                <Checkbox 
                    key={index} 
                    defaultChecked={ schedule.occurs && schedule.occurs.indexOf(index) > -1}
                    onChange={(e) => onToggleDay(index, e.target.checked)}>{day}</Checkbox>
            )}            
        </FormGroup>
    )
};

export default OccurrenceWeekDays