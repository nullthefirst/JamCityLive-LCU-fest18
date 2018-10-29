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
            <Col xs={12} md={6}>
              <Image className="pic" src={'https://res.cloudinary.com/poetrique/image/upload/v1540797146/clients/jamcitylive/fest3.jpg'} alt="promo" />
            </Col>
            <Col xs={12} md={6}>
              <Image className="pic" src={'https://res.cloudinary.com/poetrique/image/upload/v1540797144/clients/jamcitylive/fest4.jpg'} alt="promo" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Image className="pic" src={'https://res.cloudinary.com/poetrique/image/upload/v1540797215/clients/jamcitylive/fest5.jpg'} alt="promo" />
            </Col>
            <Col xs={12} md={6}>
              <Image className="pic" src={'https://res.cloudinary.com/poetrique/image/upload/v1540797219/clients/jamcitylive/fest6.jpg'} alt="promo" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}