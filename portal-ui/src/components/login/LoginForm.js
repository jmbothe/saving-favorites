import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    userCredentials: {
      "login-email": null,
    },
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.logIn(this.state.userCredentials);
    e.target.reset();
  }

  onChange = (e) => {
    console.log(e.target.name)
    const userCredentials = {...this.state.userCredentials}
    userCredentials[e.target.name] = e.target.value;
    this.setState({userCredentials});
  }

  render() { 
    return (
    <form className="login-form" onSubmit={this.handleSubmit}>
      <div className="form-row">
        <label htmlFor="login-email">Email</label>
        <input
          type="email" id="login-email" name="login-email" required
          onChange={this.onChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="login-password">Password</label>
        <input
          type="password" id="login-password" name="login-password" required
          onChange={this.onChange}  
        />
      </div>
      <div className="form-row">
        <input type="submit" id="login-submit" />
      </div>
    </form>
  )
  }
}
 
export default LoginForm;