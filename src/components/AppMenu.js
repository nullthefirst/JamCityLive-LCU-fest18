import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

import './Dark.css';

import Overview from './views/overview';
import Goals from './views/goals';
import Events from './views/events';
import History from './views/history';

export default class AppMenu extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">LCU JamCityLive Festival 2018</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/goals">Goals</Link>
                </NavItem>
                <NavItem>
                  <Link to="/events">Events</Link>
                </NavItem>
                <NavItem>
                  <Link to="/history">History</Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={Overview} />
          <Route path="/goals" component={Goals} />
          <Route path="/events" component={Events} />
          <Route path="/history" component={History} />

        </div>
      </Router>
    );
  }
}