import React from 'react';

const FlatList = (props) => {
  return props.flats.map(flat => <p key={flat.id}>{flat.name}</p>);
};

export default FlatList;
