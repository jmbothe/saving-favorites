import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResultCard extends Component {
  state = {}
  render() { 
    return (
      <Link
        onClick={() => this.props.setDetail(this.props.item)}
        className="result-card" to="/detail"
      >
        <img src={this.props.imgUrl} />
      </Link>
    )
  }
}
 
export default ResultCard;