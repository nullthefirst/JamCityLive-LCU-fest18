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
              <th><h4>SN</h4></th>
              <th><h4>Day</h4></th>
              <th><h4>Event</h4></th>
              <th><h4>Activities</h4></th>
              <th><h4>Time</h4></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Friday, 9th Nov.</td>
              <td><b>Show Biz 101</b> (Conference Center)</td>
              <td>
                <ol type="a">
                  <li>Music Seminar & Workshop</li>
                  <li>Cinematography and Audio-Visual Seminar & <em>Workshop</em></li>
                  <li>Entertainment Law, Contracts & Career advice</li>
                </ol>
              </td>
              <td><em>12pm - 4pm</em></td>
            </tr>
            <tr>
              <td>2.</td>
              <td>" "</td>
              <td><b>#CITYconValley</b> (ROC World)</td>
              <td>
                <ol type="a">
                  <li>IT Convention & Contests</li>
                  <li>Gamers Convention & Tourneys</li>
                </ol>
              </td>
              <td><em>12pm - 4pm</em></td>
            </tr>
            <tr>
              <td>3.</td>
              <td>" "</td>
              <td><b>Friday Night Spice</b> (Stadium)</td>
              <td>
                <ol type="a">
                  <li>Repeckt Tha Mic (Music Competition)</li>
                  <li> Music, Fair and more</li>
                  <li> Music, Fair and more</li>
                </ol>
              </td>
              <td><em>12pm - 4pm</em></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}