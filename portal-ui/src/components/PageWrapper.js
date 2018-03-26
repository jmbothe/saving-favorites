import React, { Component } from 'react';

class PageWrapper extends Component {

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
      <div className="page-wrapper">
        <header>
          <div>
            <h1>Walters Art Museum: Ancient Americas Collection</h1>
          </div>
          {this.props.currentUser ? this.loggedInCard() : null}
        </header>

        <section>
          {this.props.children}
        </section>

        <footer>

        </footer>
      </div>
    )
  }
}
 
export default PageWrapper;