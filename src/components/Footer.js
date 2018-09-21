import React, { Component } from 'react';

import './Dark.css';

const footerStyle = {
  textAlign: "center",
  marginTop: "2em"
}

export default class Footer extends Component {
  render() {
    return(
      <div style={footerStyle}>
        <h5>JamCityLive Entertainment &copy; 2018 | All Rights Reserved</h5>
        <h6><a href="https://twitter.com/Usheninte">Coded by Usheninte</a></h6>
      </div>
    );
  }
}