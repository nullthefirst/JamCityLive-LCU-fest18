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
              <td><em>" "</em></td>
            </tr>
            <tr>
              <td>3.</td>
              <td>" "</td>
              <td><b>Friday Night Spice</b> (Stadium)</td>
              <td>
                <ol type="a">
                  <li>Repeckt Tha Mic (Music Competition)</li>
                  <li>Music, Fair and more</li>
                  <li>Fireworks</li>
                  <li>Movie Screening</li>
                </ol>
              </td>
              <td><em>7pm - 11pm</em></td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Saturday, 10th Nov.</td>
              <td><b>Community Service</b></td>
              <td>Volunteers’ Visitation to aid the less privileged providing supplies and support in various ways possible.</td>
              <td><em>8am – 12pm</em></td>
            </tr>
            <tr>
              <td>5.</td>
              <td>" "</td>
              <td><b>#JamCityPlayoffs</b> (Stadium)</td>
              <td>
                <ol type="a">
                  <li>10 participants for Cook-off with 3 emerging as winners</li>
                  <li>First 3 will be awarded prizes</li>
                  <li>Simultaneous Exhibition of Projects and work materials from LCU’s EDP</li>
                  <li>Side Attractions: Freebies, Music, Fair (etc)</li>
                  <li>Fashion Show for Student Models wearing Student made attires</li>
                </ol>
              </td>
              <td><em>" "</em></td>
            </tr>
            <tr>
              <td>6.</td>
              <td>" "</td>
              <td><b>Cook-Off & Entrepreneurial Development Program (EDP) – Exhibitions</b> (Car Park)</td>
              <td>
                Sporting Contests involving specific amount of teams in various sports.
                <br />
                Preliminary rounds before the festival and the finals with prizes during the festival.
              </td>
              <td><em>" "</em></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}