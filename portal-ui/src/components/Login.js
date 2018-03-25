import React, { Component } from 'react';
import PageWrapper from './PageWrapper'

class Login extends Component {
  state = {}
  render() { 
    return (
      <PageWrapper
      currentUser={this.props.currentUser}
      logInOut={this.props.logInOut}
      >
        Login
      </PageWrapper>
    )
  }
}
 
export default Login;