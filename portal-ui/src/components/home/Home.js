import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import PageWrapper from '../PageWrapper';
import Browse from './Browse';
import Search from './Search';

class Home extends Component {
  render() { 
    if (!this.props.currentUser) return <Redirect to="/login"/>;
    return (
      <PageWrapper
        currentUser={this.props.currentUser}
        logOut={this.props.logOut}
      >
        <section className="home-container">
          <p>
            In 1911, Henry Walters purchased almost 100 gold artifacts from the Chiriqui region of western Panama, creating a core collection of ancient American art. Now strengthened by long-term loans and generous gifts from private collectors, the Ancient American galleries feature exceptional works of art from Central and South America, including masterpieces from the Mesoamerican Olmec, Aztec, and Maya cultures, as well as the Moche and Inca peoples of eastern South America.
          </p>
          <section className="browse-search-container">
            <Browse />
            <Search />
          </section>
        </section>
      </PageWrapper>
    )
  }
}
 
export default Home;