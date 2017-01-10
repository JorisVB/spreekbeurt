import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { scheduleTypes } from '../consts';

export const ScheduleType = ({schedule, onClick}) => {
    let scheduleType = schedule.scheduleType
    return (
        <div>        
            <ButtonGroup>
                {Object.keys(scheduleTypes).map((k) =>
                    <Button 
                        onClick={() => onClick(scheduleTypes[k].key)} 
                        active={ scheduleType === scheduleTypes[k].key} 
                        bsStyle={scheduleTypes[k].bsStyle} 
                        key={k} >{scheduleTypes[k].display}
                    </Button>                    
                )}
            </ButtonGroup>
        </div>)
}