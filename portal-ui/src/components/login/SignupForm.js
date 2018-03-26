import React, { Component } from 'react';

class SignupForm extends Component {
  state = {}
  render() { 
    return (
      <form className="signup-form">
        <div className="form-row">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" required />
        </div>
        <div className="form-row">
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" required />
        </div>
        <div className="form-row">
          <label for="signup-email">Email</label>
          <input type="email" id="signup-email" name="signup-email" required />
        </div>
        <div className="form-row">
          <label for="signup-password">Password</label>
          <input type="password" id="signup-password" name="signup-password" required />
        </div>
        <div className="form-row">
          <input type="submit" id="signup-submit" />
        </div>
      </form>
    )
  }
}
 
export default SignupForm;