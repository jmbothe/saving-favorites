import React, { Component } from 'react';
import PageWrapper from '../PageWrapper'
import LoginCard from './LoginCard';

class Login extends Component {
  state = {}
  render() { 
    return (
      <PageWrapper
      currentUser={this.props.currentUser}
      logInOut={this.props.logInOut}
      >
        <LoginCard />
      </PageWrapper>
    )
  }
}
 
export default Login;