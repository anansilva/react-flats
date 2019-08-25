import React, { Component } from 'react';
import flats from '../../data/flats';
import FlatList from './flat-list';
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 38.722252,
        lng: -9.139337
      },
      zoom: 11
    };
  }

  render() {
    return (
      <div>
        <div className="map-container">
          <Map center={this.state.center} zoom={this.state.zoom}/>
        </div>
        <div className="flat-list">
          <FlatList flats={flats} />
        </div>
      </div>
    );
  }
}

export default App;
