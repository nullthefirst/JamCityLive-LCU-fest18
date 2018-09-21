import React, { Component } from 'react';
import Intro from './components/intro';
import Timeline from './components/timeline';
import Contact from './components/contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Timeline />
        <Contact />
      </div>
    );
  }
}

export default App;
