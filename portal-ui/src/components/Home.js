import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import PageWrapper from './PageWrapper';

class Home extends Component {
state = {  }
 
  render() { 
    if (!this.props.currentUser) return <Redirect to="/Login"/>;
    return (
      <PageWrapper>
        Home
      </PageWrapper>
    )
  }
}
 
export default Home;