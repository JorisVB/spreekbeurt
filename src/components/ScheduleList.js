import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import AddScheduleButton from '../containers/AddSchedule';

export const ScheduleList = ({schedules, selectedScheduleId, onSelectSchedule}) => {      
    const scheduleListItems = schedules.map((schedule) =>
            <NavItem eventKey={schedule.id} key={schedule.id}>{schedule.name}</NavItem>
        );
    return (
        <div>
            <Nav bsStyle="pills" activeKey={selectedScheduleId} stacked onSelect={ (key) => onSelectSchedule(key)}>{scheduleListItems}</Nav>
            <AddScheduleButton></AddScheduleButton>
        </div>
    );
}