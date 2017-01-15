import React from 'react';
import { Nav, NavItem, Button, Glyphicon } from 'react-bootstrap';
import AddScheduleButton from '../containers/AddSchedule';

export const ScheduleList = ({schedules, selectedScheduleId, onSelectSchedule, onRemoveSchedule }) => {      
    const scheduleListItems = schedules.map((schedule) =>
            <NavItem eventKey={schedule.id} key={schedule.id}>
                {schedule.name}
                <Button bsClass="pull-right" onClick={() => onRemoveSchedule(schedule.id)}>
                    <Glyphicon glyph="remove" />
                </Button>
            </NavItem>
        );
    return (
        <div>
            <AddScheduleButton></AddScheduleButton>
            <Nav bsStyle="pills" activeKey={selectedScheduleId} stacked onSelect={ (key) => onSelectSchedule(key)}>{scheduleListItems}</Nav>            
        </div>
    );
}