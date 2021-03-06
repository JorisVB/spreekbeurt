import React from 'react';
import { FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap';
import { ScheduleType } from './ScheduleType';
import { OccursEveryType } from './OccursEveryType';
import OccurrenceWeekDays from './OccurrenceWeekDays';
import OccurrenceMonthDays from './OccurrenceMonthDays';
import { occurrenceTypes } from '../consts';
import DatePicker from 'react-bootstrap-date-picker';

const ScheduleDetails = ({
    schedule,
    onSelectScheduleType,
    onSetName,
    onSetOccursEveryAmount,
    occurrenceType,
    onSetOccurrenceType,
    onToggleDay,
    onSetStartDate
}) => {        
    return !schedule 
    ? (<Form horizontal />) 
    : (        
        <Form horizontal>
            <FormGroup>
                <FormControl type="text" value={schedule.name} onChange={(e) => onSetName(schedule.id, e.target.value)}></FormControl>
            </FormGroup>
            <FormGroup>
                <ScheduleType
                    schedule={schedule}
                    onClick={(scheduleType) => onSelectScheduleType(schedule.id, scheduleType)} />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Uitvoeren</ControlLabel>
                <OccursEveryType
                    schedule={schedule}
                    onChange={(occurrenceType) => onSetOccurrenceType(schedule.id, occurrenceType)} />
            </FormGroup>
            {
                schedule.occursEveryType === occurrenceTypes.DAILY.key &&
                <FormGroup>
                    <ControlLabel>Om de</ControlLabel>
                    <FormControl type="text" value={schedule.occursEveryAmount} onChange={(e) => onSetOccursEveryAmount(schedule.id, e.target.value)} />
                </FormGroup>
            }
            {
                schedule.occursEveryType === occurrenceTypes.WEEKLY.key &&
                <OccurrenceWeekDays
                    schedule={schedule}
                    onToggleDay={(weekday, checked) => onToggleDay(schedule.id, weekday, checked)} />
            }
            {
                schedule.occursEveryType === occurrenceTypes.MONTHLY.key &&
                <OccurrenceMonthDays
                    schedule={schedule}
                    label="Dagen"
                    amountOfDays={31}
                    onToggleDay={(day, checked) => onToggleDay(schedule.id, day, checked)} />
            }
            {
                schedule.occursEveryType === occurrenceTypes.MONTHLY_WORKDAYS.key &&
                <OccurrenceMonthDays
                    schedule={schedule}
                    label="Werkdagen"
                    amountOfDays={23}
                    onToggleDay={(day, checked) => onToggleDay(schedule.id, day, checked)} />
            }
            <FormGroup>
                <ControlLabel>Start datum</ControlLabel>
                <DatePicker id='start-date-picker'
                    value={schedule.startDate.toISOString()}
                    onChange={function (value, formattedValue) { onSetStartDate(schedule.id, new Date(value)) } } />
            </FormGroup>
        </Form>
    );
}

export default ScheduleDetails