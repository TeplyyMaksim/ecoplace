import React, { Component } from 'react';
import MapContainer from 'containers/MapContainer';
import './App.css';

export default class App extends Component {
  render() {
    return <div className="App">
      <MapContainer>
        <h1 className="App-title">Welcome to React</h1>
      </MapContainer>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>;
  }
};

