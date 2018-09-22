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
            <th></th>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    );
  }
}