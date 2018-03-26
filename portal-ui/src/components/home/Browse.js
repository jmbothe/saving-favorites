import React, { Component } from 'react';

import {regions, media} from '../../browse.js'

class Browse extends Component {
  handleChange = (e) => {
    const queryString = `${e.target.name}=${e.target.value}`
    this.props.getObjects(queryString);
  }

  getFavorites = () => {
    const queryString = `objectId=${this.props.currentUser.favorites.map(item => {
      return item.itemId;
    }).join(',')}`
    this.props.getObjects(queryString);
  }

  render() { 
    const regionOptions = Object.entries(regions).map(item => {
      return <option value={`${item[1].join(',')}`}>{item[0]}</option>
    });

    const mediaOptions = media.map(item => {
      return <option value={item}>{item}</option>
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
          <select name="Creator" onChange={this.handleChange}>
            {regionOptions}
          </select>
        </div>
        <div>
          <select name="Classification" onChange={this.handleChange}>
            {mediaOptions}
          </select>
        </div>
      </div>      
    </section>
    )
  }
}
 
export default Browse;