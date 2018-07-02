import React, { Component } from 'react';

export default class MapHeader extends Component {
  render() {
    return <h2 className="MapHeader">
      {this.props.children}
    </h2>;
  }
};

