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
    userCredentials['login-email'] = userCredentials['login-email'].replace(/@|\./ig, '');
    fetch(`http://localhost:8080/users/get-user-by-email/${userCredentials['login-email']}`)
      .then(response => {
        if (response.status == 404) {
          alert('user not found')
          throw new Error(response.status)
        } else {
          return response.json();
        }
      })
      .then(body => {
        let currentUser = {...this.state.currentUser};
        currentUser = {...body};
        this.setState({currentUser});
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  logOut = () => {
    let currentUser = {...this.state.currentUser};
    currentUser = null;
    this.setState({currentUser});
  }

  signUp = (newUser) => {
    newUser.email = newUser.email.replace(/@|\./ig, '');

    fetch('http://localhost:8080/users/add-user/', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => {
      console.log(response)
      return response.json();
    })
    .then(body => {
      let currentUser = {...this.state.currentUser};
      currentUser = {...body};
      this.setState({currentUser});
    })
    .catch((error)=> {
      console.log(error)
    })
  }

  LoginComponent = () =>
    <Login
      currentUser={this.state.currentUser}
      logOut={this.logOut}
      logIn={this.logIn}
      signUp={this.signUp}
    />;

  HomeComponent = () =>
    <Home
      currentUser={this.state.currentUser}
      logOut={this.logOut}
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
