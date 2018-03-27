import React, { Component } from 'react';

class PageWrapper extends Component {
  logOutRedirect = () => {
    this.props.logOut();
    this.props.toggleRedirect('login');
  }

  loggedInCard = () =>
    <div className="heading-logout-container">
      <span>
        Logged in as {this.props.currentUser.firstName} {this.props.currentUser.lastName}
      </span>
      <button onClick={this.logOutRedirect}>
        log out
      </button>
    </div>

  render() { 
    return (
      <div className="page-wrapper">
        <header>
          <div>
            <h1>The Walters Art Museum</h1>
            <h2>Ancient Americas Collection</h2>
          </div>
          {this.props.currentUser ? this.loggedInCard() : null}
        </header>
        {this.props.children}
        <footer>

        </footer>
      </div>
    )
  }
}
 
export default PageWrapper;