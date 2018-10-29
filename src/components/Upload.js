import React, { Component } from 'react';

const space = {
  fontStyle: "bold"
}

export default class Upload extends Component {
  render() {
    return(
      <div>
        <a href="http://bit.ly/submit-JCLFest18"
           alt="http://bit.ly/submit-JCLFest18">
          <p style={space}>CLICK HERE TO</p>
          <p style={space}>UPLOAD YOUR SONG FOR THE FESTIVAL</p>
        </a>
      </div>
    );
  }
}