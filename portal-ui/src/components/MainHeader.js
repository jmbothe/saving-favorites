import React, { Component } from 'react';

class MainHeader extends Component {
  loggedInCard = () =>
  <div className="heading-logout-container">
    <span>
      Logged in as {this.props.currentUser.firstName} {this.props.currentUser.lastName}
    </span>
    <button onClick={() => this.props.logInOut()}>
      log out
    </button>
  </div>

  render() { 
    return (
        <header>
          <div>
            <h1>Walters Art Museum: Ancient Americas Collection</h1>
          </div>
          {this.props.currentUser ? this.loggedInCard() : null}
        </header>
    )
  }
}
 
export default MainHeader;