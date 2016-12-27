import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import './App.css';
import Schedules from './containers/Schedules';
import { Calendar } from './components/Calendar';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6} xs={12}>
            <Schedules />
          </Col>
          <Col md={6} xs={12}>
            <Calendar />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
