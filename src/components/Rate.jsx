import React, { Component } from 'react';
import FaGlobe from 'react-icons/lib/fa/globe';
import TiWeatherWindy from 'react-icons/lib/ti/weather-windy';
import FaFlask from 'react-icons/lib/fa/flask';
import MdVolumeUp from 'react-icons/lib/md/volume-up';
import TiFlashOutline from 'react-icons/lib/ti/flash-outline';
import MdFilterHdr from 'react-icons/lib/md/filter-hdr';
import 'components/Rate.css';

class Rate extends Component {
  render() {
    if (!this.props.selectedPlace) {
      return <h2>Please, select place on map</h2>;
    }
    
    const { totalRate, airRate } = this.props.selectedPlace;

    return <div className="Rate">
      <div className="total-rate">
        <FaGlobe size={50} style={{ marginRight: 15 }} />
        <span>Total Rate: {totalRate}</span>
      </div>
      <div className="air-rate">
        <TiWeatherWindy size={40} />
        <span>Air Rate: {airRate}</span>
      </div>
      <div className="water-rate">
        <FaFlask size={40} />
        <span>Water Rate:<br/> Coming soon...</span>
      </div>
      <div className="noise-rate">
        <MdVolumeUp size={40} />
        <span>Noise Rate:<br/> Coming soon...</span>
      </div>
      <div className="emp-rate">
        <TiFlashOutline size={40} />
        <span>EMP Rate:<br/> Coming soon...</span>
      </div>
      <div className="earth-rate">
        <MdFilterHdr size={40} />
        <span>Earth Rate:<br/> Coming soon...</span>
      </div>
    </div>;
  }
}

export default Rate;