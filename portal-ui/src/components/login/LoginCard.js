import React, { Component } from 'react';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

class LoginCard extends Component {
  state = {
    loginView: false,
  }

  toggleLoginView = (boolean) => {
    this.setState({loginView: boolean});
  }

  render() { 
    const content = (this.state.loginView)
    ? <LoginForm
        logIn={this.props.logIn}
      />
    : <SignupForm
        signUp={this.props.signUp}
      />


    return (
      <section className="login-card">
        <header>
          <button
            onClick={() => this.toggleLoginView(true)}
          >
            Log in
          </button>
          <button
            onClick={() => this.toggleLoginView(false)}
          >
            Sign up
          </button>
        </header>
       {content}
      </section>
    )
  }
}
 
export default LoginCard;