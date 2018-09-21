import React, { Component } from 'react';
import '../App.css';

class Timeline extends Component {
  render() {
    return (
      <div>
        <h3>Breakdown of activities</h3>
        <ul>
          <li>Location info</li>
          <li>Time info</li>
          <li>Day info</li>
        </ul>
      </div>
    );
  }
}

export default Timeline;