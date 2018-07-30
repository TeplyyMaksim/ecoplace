import React, { Component } from 'react';
import IoConnectbars from 'react-icons/lib/io/connectbars';
import IoMap from 'react-icons/lib/io/map';
import 'components/Gradation.css';

class Gradation extends Component {
  get placesList() {
    return this.props.places
      .sort((place1, place2) => place1.totalRate + place2.totalRate)
      .map((place, index) =>
        <div className="place" key={index}>
          <div className="place-rating">{index + 1}:</div>
          <div className="place-data">
            <div className="place-rate">
              <IoConnectbars size={24} style={{ marginRight: 7.5 }} />
              Total Rate: {place.totalRate}
            </div>
            <div className="place-coords">
              <div className="place-coords-header"><IoMap size={18} style={{ marginRight: 5 }} /> Coordinates:</div>
              <div className="place-lat">Latitude: {place.lat}</div>
              <div className="place-lng">Longitude: {place.lng}</div>
            </div>
          </div>
        </div>
    );
  }

  get noPlacesMessage() {
    return <h2>You did not selected any places</h2>;
  }

  render() {
    return <div className="Gradation">
      {this.props.places.length ? this.placesList : this.noPlacesMessage}
    </div>;
  }
}

export default Gradation;