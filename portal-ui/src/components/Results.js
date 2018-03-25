import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Results extends Component {
  state = {}
  render() {
    if (!this.props.currentUser) return <Redirect to="/Login"/>;

    return (
      <section></section>
    )
  }
}
 
export default Results;