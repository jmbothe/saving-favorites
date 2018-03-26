import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import {regions, media} from '../../browse.js'

class Browse extends Component {
  handleChange = (e) => {
    const queryString = `${e.target.name}=${e.target.value}`
    this.props.getObjects(queryString);
    this.props.toggleRedirect('results');
  }

  getFavorites = () => {
    const queryString = `objectId=${this.props.currentUser.favorites.map(item => {
      return item.itemId;
    }).join(',')}`
    this.props.getObjects(queryString);
    this.props.toggleRedirect('results');
  }

  render() { 
    const regionOptions = Object.entries(regions).map((item, index) => {
      return <option key={index} value={`${item[1].join(',')}`}>{item[0]}</option>
    });

    const mediaOptions = media.map((item, index) => {
      return <option key={index} value={item}>{item}</option>
    });

    return (
    <section className="browse-container">
      <header>
        <h3>Browse</h3>
      </header>
      <div>
        <div>
          <button onClick={this.getFavorites}>
            View Your Favorites
          </button>  
        </div>
        <div>
          <label htmlFor="Creator">Browse by Region</label>
          <select name="Creator" onChange={this.handleChange}>
            <option value="" selected disabled hidden>Choose here</option>
            {regionOptions}
          </select>
        </div>
        <div>
          <label htmlFor="Creator">Browse by Media</label>
          <select name="Classification" onChange={this.handleChange}>
            <option value="" selected disabled hidden>Choose here</option>
            {mediaOptions}
          </select>
        </div>
      </div>      
    </section>
    )
  }
}
 
export default Browse;