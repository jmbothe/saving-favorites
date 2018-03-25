import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Results from './components/Results';
import Detail from './components/Detail';
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {
  state = {
    collectionId: 2,
    currentUser: {
      userId: '',
      email: '',
      firstName: 'Jeff',
      lastName: 'Bothe'
    }
  }

  logInOut = (user) => {
    let currentUser = {...this.state.currentUser};
    currentUser = user || null;
    this.setState({currentUser});
  }

  LoginComponent = () =>
    <Login
      currentUser={this.state.currentUser}
      logInOut={this.logInOut}
    />;

  HomeComponent = () =>
    <Home
      currentUser={this.state.currentUser}
      logInOut={this.logInOut}
    />;

  ResultsComponent = () =>
    <Results />;

  DetailComponent = () =>
    <Detail />;

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={this.HomeComponent}/>
          <Route exact path="/login" render={this.LoginComponent}/>
          <Route exact path="/results" render={this.ResultsComponent} />
          <Route exact path="/detail" render={this.DetailComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
