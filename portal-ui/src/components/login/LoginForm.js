import React, { Component } from 'react';

class LoginForm extends Component {
  state = {}
  render() { 
    return (
    <form className="login-form">
      <div className="form-row">
        <label for="login-email">Email</label>
        <input type="email" id="login-email" name="login-email" required />
      </div>
      <div className="form-row">
        <label for="login-password">Password</label>
        <input type="password" id="login-password" name="login-password" required />
      </div>
      <div className="form-row">
        <input type="submit" id="login-submit" />
      </div>
    </form>
  )
  }
}
 
export default LoginForm;