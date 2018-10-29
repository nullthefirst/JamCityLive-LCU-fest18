import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import '../Dark.css';

export default class Gallery extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={4}>
              <Image className="pic" src={''} alt="promo" />
            </Col>
            <Col xs={12} md={4}>
              <Image className="pic" src={''} alt="promo" />
            </Col>
            <Col xs={12} md={4}>
              <Image className="pic" src={''} alt="promo" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}