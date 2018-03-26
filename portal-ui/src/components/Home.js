import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import PageWrapper from './PageWrapper';

class Home extends Component {
  render() { 
    if (!this.props.currentUser) return <Redirect to="/Login"/>;
    return (
      <PageWrapper
        currentUser={this.props.currentUser}
        logOut={this.props.logOut}
      >
        Home
      </PageWrapper>
    )
  }
}
 
export default Home;