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
          <header>Navigate</header>
          <section className="cards-container">
            {cards}
          </section>
        </section>
      </PageWrapper>
    )
  }
}
 
export default Results;