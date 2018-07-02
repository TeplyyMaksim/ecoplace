import React, { Component } from 'react';
import './MapContainer.css';

export default class MapContainer extends Component {
  render() {
    return <div className="MapContainer">
      {this.props.children}
    </div>;
  }
};

