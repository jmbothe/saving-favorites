import React, { Component } from 'react';

class ResultCard extends Component {
  state = {}
  render() { 
    return (
      <a className="result-card" href="">
        <img src={this.props.imgUrl} />
      </a>
    )
  }
}
 
export default ResultCard;