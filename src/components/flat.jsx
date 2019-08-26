import React, {Component} from 'react';

class Flat extends Component {
  handleClick = (e) => {
    this.props.selectFlat(this.props.index);
  };
  
  render () {
    const style = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.imageUrl})` };
    return (
      <div className="card" style={style} onClick={this.handleClick}>
        <div className="card-category">
          {this.props.price}
          {' '}
          {this.props.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#" />
      </div>
    );
  }
};

export default Flat;
