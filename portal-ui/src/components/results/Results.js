import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import PageWrapper from '../PageWrapper';
import ResultCard from './ResultCard';

class Results extends Component {
  state = {
    redirect: '',
  }

  toggleRedirect = (route) => {
    this.setState({redirect: route});
  }

  decrementPage = () => {
    this.props.getObjects(this.props.queryString, this.props.page - 1)
  }

  incrementPage = () => {
    this.props.getObjects(this.props.queryString, this.props.page + 1)
  }

  render() {
    if (this.state.redirect) return <Redirect to={`/${this.state.redirect}`}/>;

    const cards = this.props.objects.map((item, index) => {
      return <ResultCard setDetail={this.props.setDetail} item={item} imgUrl={item.PrimaryImage.Large}/>;
    })

    return (
      <PageWrapper
        toggleRedirect={this.toggleRedirect}
        currentUser={this.props.currentUser}
        logOut={this.props.logOut}
      >
        <section className="results-container">
          <header>
            <button onClick={this.decrementPage} disabled={!this.props.prevPage}>
              Prev
            </button>
            <button onClick={this.incrementPage} disabled={!this.props.nextPage}>
              Next
            </button>
          </header>
          <section className="cards-container">
            {cards}
          </section>
        </section>
      </PageWrapper>
    )
  }
}
 
export default Results;