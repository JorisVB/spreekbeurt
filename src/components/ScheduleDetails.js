import React from 'react';
import { FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap';
import { ScheduleType } from './ScheduleType';
import { OccursEveryType } from './OccursEveryType';
import OccurrenceWeekDays from './OccurrenceWeekDays';
import { occurrenceTypes } from '../consts';

const ScheduleDetails = ({
        schedule, 
        onSelectScheduleType, 
        onSetName, 
        onSetOccursEveryAmount, 
        occurrenceType, 
        onSetOccurrenceType,
        onToggleDay}) => {    
    return (
        <Form horizontal>
            <FormGroup>
                    <FormControl type="text" value={schedule.name} onChange={(e) => onSetName(schedule.id, e.target.value )}></FormControl>
            </FormGroup>  
            <FormGroup>                              
                <ScheduleType 
                    schedule={schedule} 
                    onClick={(scheduleType) => onSelectScheduleType(schedule.id, scheduleType)}/>
            </FormGroup>            
            <FormGroup>
                <ControlLabel>Elke</ControlLabel>
                <FormControl type="text" value={schedule.occursEveryAmount} onChange={(e) => onSetOccursEveryAmount( schedule.id, e.target.value )} />
                <OccursEveryType 
                    schedule={schedule} 
                    onChange={(occurrenceType) => onSetOccurrenceType(schedule.id, occurrenceType)}/>                
            </FormGroup>
            {
                schedule.occursEveryType === occurrenceTypes.WEEKLY.key &&
                <OccurrenceWeekDays
                    schedule={schedule} 
                    onToggleDay={(weekday, checked) => onToggleDay(schedule.id, weekday, checked)}/>
            }
            {
                schedule.occursEveryType === occurrenceTypes.MONTHLY.key &&
                <OccurrenceWeekDays
                    schedule={schedule} />
            }
            {
                schedule.occursEveryType === occurrenceTypes.MONTHLY_WORKDAYS.key &&
                <OccurrenceWeekDays
                    schedule={schedule} />
            }
        </Form>
    );
}

export default ScheduleDetails