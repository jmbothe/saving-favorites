import React, { Component } from 'react';

import {regions, media} from '../../browse.js'

class Browse extends Component {
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
          <button>
            View Your Favorites
          </button>  
        </div>
        <div>
          <select name="regions">
            {regionOptions}
          </select>
        </div>
        <div>
          <select name="media">
            {mediaOptions}
          </select>
        </div>
      </div>      
    </section>
    )
  }
}
 
export default Browse;