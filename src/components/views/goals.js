import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import '../Dark.css'

export default class Goals extends Component {
  render() {
    return (
      <div>
      <h1>Goals</h1>
        <ListGroup>
          <ListGroupItem>
            <span><span className="sky">a)</span> To primarily seek out talents and provide a platform for them to build their attributes.</span>
          </ListGroupItem>
          <ListGroupItem>
            <span><span className="sky">b)</span> The Jam City Program and Festival is to promote the concept of Learning by Practice.</span>
          </ListGroupItem>
          <ListGroupItem>
            <span><span className="sky">c)</span> The Festival presents a new, alternative leisure and fun experience that fosters coexistence between various individuals from various tribes and cultures.</span>
          </ListGroupItem>
          <ListGroupItem>
            <span><span className="sky">d)</span> To prepare young people for the future and encourage them to be job creators, on the long run, contributing to the reduction of the alarming unemployment rate in the country.</span>
          </ListGroupItem>
          <ListGroupItem>
            <span><span className="sky">e)</span> To impact students and other young people to become more productive and enterprising as they grow in age and experience.</span>
          </ListGroupItem>
          <ListGroupItem>
            <span><span className="sky">f)</span> To help improve skills in order to innovate to flush out mediocrity in various sectors of the community and economy.</span>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}