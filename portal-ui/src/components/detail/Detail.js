import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import PageWrapper from '../PageWrapper'

class Detail extends Component {
  state = {
    redirect: '',
  }

  toggleRedirect = (route) => {
    this.setState({redirect: route});
  }

  render() {
    if (this.state.redirect) return <Redirect to={`/${this.state.redirect}`}/>;

    return (
      <PageWrapper
        toggleRedirect={this.toggleRedirect}
        currentUser={this.props.currentUser}
        logOut={this.props.logOut}
      >
        <section className="detail-container">
          <section className="detail-image">
            <a href={this.props.detail.PrimaryImage.Raw} target="_blank" rel="noopener noreferrer">
              <img src={this.props.detail.PrimaryImage.Raw}/>
            </a>
          </section>
          <section className="detail-text">
          <div>
            <h2>{this.props.detail.Title || null}</h2>
            <button>Add To Favorites</button>
          </div>
            <h3>{this.props.detail.Culture || null}</h3>
            <p>{this.props.detail.Period || null} {this.props.detail.DateText || null}</p>
            <p>{this.props.detail.Medium || null}</p>
            <p>Dimensions: {this.props.detail.Dimensions || null}</p>
            <p>{this.props.detail.Description || null}</p>
            <p>Credit: {this.props.detail.CreditLine || null}</p>
            <p>Provenance: {this.props.detail.Provenance || null}</p>
          </section>
        </section>
      </PageWrapper>
    )
  }
}
 
export default Detail;