import React from 'react';

import Flat from './flat';

const FlatList = (props) => {
  return props.flats.map(flat => <Flat {...flat} key={flat.id} />);
};

export default FlatList;
