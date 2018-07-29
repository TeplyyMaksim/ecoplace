import React, { Component } from 'react';
import IoLeaf from 'react-icons/lib/io/leaf';
import Map from 'components/Map';
import Rate from 'components/Rate';
import { generatePlaceData } from 'utils.js'
import Gradation from 'components/Gradation';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      selectedPlace: null
    };
  }

  selectPlace = (place, lat, lng) => {
    if (!place.data) {
      alert('There are no data about this place, please, provide another location.');
      
      return;
    }
    
    const placeData = generatePlaceData(place.data, lat, lng);

    /* NOTE: I did not forget it, leave console.log alone! */
    console.log(placeData);

    this.setState({
      selectedPlace: placeData,
      places: [...this.state.places, placeData]
    })
  }

  addPlace = (lat, lng) => {
    fetch(`https://api.waqi.info/feed/geo:${lat};${lng}/?token=e725cb270eb584c8bbe63cb097c36cb813ed7f69`)
      .then(response => response.json())
      .then(place => this.selectPlace(place, lat, lng));
  }

  render() {
    return <div className="App">
      <div className="MapContainer">
        <h1 className="MapHeader">Please, select your Ecoplace <IoLeaf size={36} style={{ marginLeft: 15, color: '#4CAF50' }} /></h1>
        <Map coordinatesSelected={this.addPlace}/>
      </div>
      <div className="DataContainer">
        <div className="RateContainer">
          <Rate selectedPlace={this.state.selectedPlace} />
        </div>
        <div className="GradationContainer">
          <Gradation places={this.state.places} />
        </div>
      </div>
    </div>;
  }
};

