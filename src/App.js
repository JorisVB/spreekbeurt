import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap'
import './App.css';
import ScheduleListComponent from './containers/ScheduleList';
import SelectedScheduleDetails from './containers/SelectedSchedule';
import { Calendar } from './components/Calendar';

class App extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col md={2}>            
            <ScheduleListComponent />
          </Col>
          <Col md={3}>            
            <SelectedScheduleDetails />            
          </Col>
          <Col md={3}>
            <Panel>
              <Calendar />
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
