import React, { Component } from 'react';
import AppMenu from './components/AppMenu';
import Social from './components/Social';
import Upload from './components/Upload';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <AppMenu />
        <Social />
        <br />
        <Upload />
        <Footer />
      </div>
    );
  }
}

export default App;
