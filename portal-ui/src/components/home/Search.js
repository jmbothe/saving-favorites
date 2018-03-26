import React, { Component } from 'react';

import {cultures, periods, media, orderBy} from '../../browse'

class Search extends Component {
  state = {
    search: {

    }
  }
  render() { 
    const orderByOptions = Object.entries(orderBy).map(item => {
      return <option value={item[1]}>{item[0]}</option>
    });

    const cultureOptions = cultures.map(item => {
      return <option value={item}>{item}</option>
    });

    const periodOptions = periods.map(item => {
      return <option value={item}>{item}</option>
    });

    const mediaOptions = media.map(item => {
      return <option value={item}>{item}</option>
    });

    return (
      <section className="search-container">
        <header>
          <h3>Search</h3>
        </header>
        <section>
          <form className="search-form">
            <div className="form-row">
              <label htmlFor="Title">Title</label>
              <input
                type="text" id="Title" name="Title"
                onChange={this.onChange}
                />
            </div>
            <div className="form-row">
              <label htmlFor="DateBeginYear">Date Range</label>
              <input
                type="number" id="DateBeginYear" name="DateBeginYear"
                onChange={this.onChange}
              />
              <input
                type="number" id="DateEndYear" name="DateEndYear"
                onChange={this.onChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="Creator">Culture</label>
              <select id="Creator" name="Creator">
                {cultureOptions}
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="Period">Period</label>
              <select id="Period" name="Period">
                {periodOptions}
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="Classification">Media</label>
              <select id="Classification" name="Classification">
                {mediaOptions}
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="OrderBy">Order By</label>
              <select id="OrderBy" name="OrderBy">
                {orderByOptions}
              </select>
            </div>
            <div className="form-row">
              <input type="submit" id="search-submit" />
            </div>
          </form>
        </section>
        
      </section>
    )
  }
}
 
export default Search;