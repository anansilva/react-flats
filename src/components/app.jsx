import React from 'react';
import flats from '../../data/flats';
import FlatList from './flat-list';

const App = () => {
  return (
    <div>
      <div className="flat-list">
        <FlatList flats={flats} />
      </div>
      <div className="map-container" />
    </div>
  );
};

export default App;
