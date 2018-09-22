import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../Dark.css'

export default class Events extends Component {
  render() {
    return (
      <div>
        <h1>Events</h1>
        <Table striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th>SN</th>
              <th>Day</th>
              <th>Event</th>
              <th>Activities</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    );
  }
}