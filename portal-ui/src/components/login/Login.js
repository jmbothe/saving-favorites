import React, { Component } from 'react';
import LoginCard from './LoginCard';
import PageWrapper from '../PageWrapper';

class Login extends Component {
  render() { 
    return (
        <PageWrapper
          currentUser={this.props.currentUser}
          logOut={this.props.logOut}
        >
          <LoginCard
            logIn={this.props.logIn}
            signUp={this.props.signUp}
          />
        </PageWrapper>
     
    )
  }
}
 
export default Login;