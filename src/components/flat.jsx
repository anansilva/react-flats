import React from 'react';

const Flat = ({
  price, priceCurrency, name, imageUrl
}) => {
  const style = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})` }
  return (
    <div className="card" style={style}>
      <div className="card-category">
        {price}
        {' '}
        {priceCurrency}
      </div>
      <div className="card-description">
        <h2>{name}</h2>
      </div>
      <a className="card-link" href="#" />
    </div>
  );
};

export default Flat;
