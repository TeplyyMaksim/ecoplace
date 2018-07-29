import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

export default class Button extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state === nextState) {
      return false;
    }
  }
  
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 49.8397, lng: 24.0297 } }
        onClick={props => this.props.coordinatesSelected(props.latLng.lat().toFixed(2), props.latLng.lng().toFixed(2))}
        defaultZoom = { 14 }
      />
   ));

   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: '300px'}} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
  }
};