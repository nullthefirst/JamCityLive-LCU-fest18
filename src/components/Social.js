import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const powerStyle = {
  textAlign: "center",
  marginBottom: "1em"
}

export default class Social extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xsHidden md={4}></Col>
            <Col xs={12} md={4}>
              <h3 style={powerStyle}>Like & Follow Us On</h3>
            </Col>
            <Col xsHidden md={4}></Col>
          </Row>
          <Row>
            <Col xsHidden md={4}></Col>
            <Col xs={12} md={4}>
              <Col xs={2}></Col>
              <Col xs={3}>
                <a href="https://www.facebook.com/Jamcitylive-197527667361504/"><i class="fab fa-facebook-square fa-3x"></i></a>
              </Col>
              <Col xs={3}>
                <a href="https://instagram.com/jamcitylive"><i class="fab fa-instagram fa-3x"></i></a>
              </Col>
              <Col xs={4}>
                <a href="https://twitter.com/JamCityLive"><i class="fab fa-twitter-square fa-3x"></i></a>
              </Col>
            </Col>
            <Col xsHidden md={4}></Col>
          </Row>
        </Grid>
      </div>
    );
  }
};