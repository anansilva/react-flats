import React, { Component } from 'react';
import flats from '../../data/flats';
import FlatList from './flat-list';
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    }
  }
  
  render() {
    return (
      <div>
        <div className="map-container">
          <Map center={this.center()} zoom={11}/>
        </div>
        <div className="flat-list">
          <FlatList flats={this.state.flats} selectedFlat={this.state.selectedFlat} selectFlat={this.selectFlat} />
        </div>
      </div>
    );
  }
}

export default App;
