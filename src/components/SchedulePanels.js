import React, { Component } from 'react';
import { Panel, PanelGroup, FormGroup, FormControl, ControlLabel, ButtonGroup, Button, Checkbox, Form, Col } from 'react-bootstrap';
import { scheduleTypes, occurenceTypes, weekDays } from '../consts';
import AddScheduleButton from '../containers/AddSchedule';

const SchedulePanels = ({schedules, onToggle}) => {    
    const panels = schedules.map((schedule) =>    
        <Panel header="Schedule" collapsible key={schedule.id}>
            <Schedule key={schedule.id} schedule={schedule} />
        </Panel>);
    return (
        <div>
            <PanelGroup>{panels}</PanelGroup>
            <AddScheduleButton></AddScheduleButton>
        </div>
    );
}

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.schedule;        
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup>
                    <Col sm={2}>
                        <ControlLabel>Id</ControlLabel>
                        <FormControl type="text" value={this.state.id} readOnly></FormControl>
                    </Col>
                    <Col sm={10}>
                        <ControlLabel>Scheduletype</ControlLabel>
                        <div>
                            <ButtonGroup>
                                {Object.keys(scheduleTypes).map((k) =>
                                    <Button bsStyle={scheduleTypes[k].bsStyle} key={k} active={this.state.scheduleType === scheduleTypes[k].key} onClick={() => this.setState({ scheduleType: scheduleTypes[k].key })}>{scheduleTypes[k].display}</Button>
                                )}
                            </ButtonGroup>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col sm={8}>
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></FormControl>
                    </Col>
                    <Col sm={4}>
                        <ControlLabel>Uren</ControlLabel>
                        <FormControl type="text" value={this.state.hours} onChange={() => { } }></FormControl>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col sm={2}>
                        <ControlLabel>Elke</ControlLabel>
                        <FormControl type="text" value={this.state.occursEveryAmount} onChange={(e) => this.setState({ name: e.target.value })} />
                    </Col>
                    <Col sm={6}>
                        <ControlLabel>.</ControlLabel>
                        <FormControl componentClass="select"
                            defaultValue={this.state.occursEveryType}
                            onChange={(e) => this.setState({ occursEveryType: e.target.value })}>
                            {Object.values(occurenceTypes).map((occurenceType) =>
                                <option value={occurenceType.key} key={occurenceType.key}>{occurenceType.display}</option>
                            )}
                        </FormControl>
                    </Col>
                </FormGroup>
                <FormGroup>
                    {                        
                        this.state.occursEveryType === occurenceTypes.WEEKLY.key &&
                        <Col sm={12}>
                            <FormGroup>
                                <Col sm={12}>
                                <ControlLabel>Dagen</ControlLabel>
                                {weekDays.map((day, index) =>
                                    <Checkbox readOnly key={index} checked={this.state.occurs && this.state.occurs.indexOf(index) > -1}>{day}</Checkbox>
                                )}
                                </Col>
                            </FormGroup>
                        </Col>
                    }
                    {
                        this.state.occursEveryType === occurenceTypes.MONTHLY.key &&
                        <Col sm={12}>
                            <FormGroup>
                                <Col sm={6}>
                                    <ControlLabel>Dagen</ControlLabel>
                                    <div>
                                        <ButtonGroup>
                                            {"0123456789012345678901234567890".split('').map((dummy, index) =>
                                                <Button key={index + 1} bsSize="xsmall" active={this.state.occursDays && this.state.occursDays.indexOf(index + 1) > -1}>{index + 1}</Button>
                                            )}
                                        </ButtonGroup>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <ControlLabel>Werkdagen</ControlLabel>
                                    <div>
                                        <ButtonGroup>
                                            {"01234567890123456789012".split('').map((dummy, index) =>
                                                <Button key={index + 1} bsSize="xsmall" active={this.state.occursWorkDays && this.state.occursWorkDays.indexOf(index + 1) > -1}>{index + 1}</Button>
                                            )}
                                        </ButtonGroup>
                                    </div>

                                </Col>
                            </FormGroup>
                        </Col>
                    }
                </FormGroup>
            </Form>
        );
    }
}

export { SchedulePanels, Schedule }