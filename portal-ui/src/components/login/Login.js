import React, { Component } from 'react';
import LoginCard from './LoginCard';
import MainHeader from '../MainHeader';

class Login extends Component {
  render() { 
    return (
      <div className="page-wrapper">
        <MainHeader
          currentUser={this.props.currentUser}
          logInOut={this.props.logInOut}
        />
        <section>
          <LoginCard
            logIn={this.props.logIn}
          />
        </section>
      </div>
    )
  }
}
 
export default Login;