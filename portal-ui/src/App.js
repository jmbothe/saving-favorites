import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Results from './components/Results';
import Detail from './components/Detail';
import Login from './components/login/Login';
import Home from './components/Home';

import './App.css';
import './components/login/login.css'

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

  logIn = (userCredentials) => {
    fetch('http://localhost:8080/users')
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
