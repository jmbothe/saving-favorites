import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {apiKey} from './browse';

import Results from './components/results/Results';
import Detail from './components/detail/Detail';
import Login from './components/login/Login';
import Home from './components/home/Home';

import './App.css';
import './components/login/login.css';
import './components/home/home.css';
import './components/results/results.css'
import './components/detail/detail.css'

class App extends Component {
  state = {
    collectionId: 2,
    objects: [],
    detail: {},
    currentUser: {
      userId: '',
      email: '',
      firstName: 'Jeff',
      lastName: 'Bothe'
    }
  }

  logIn = (user) => {
    user.email = user.email.replace(/@|\./ig, '');
    fetch(`http://localhost:8080/users/get-user-by-email/${user.email}`)
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

  getObjects = (queryString) => {
    fetch(`http://api.thewalters.org/v1/objects?collectionId=2&apikey=${apiKey}&${queryString}`)
      .then(response => response.json())
      .then(body => {
        let objects = [...this.state.objects];
        objects = body.Items;
        this.setState({objects});
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  setDetail = (object) => {
    let detail = {...this.state.detal};
    detail = object;
    this.setState({detail});
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
      getObjects={this.getObjects}
    />;

  ResultsComponent = () =>
    <Results
      currentUser={this.state.currentUser}
      logOut={this.logOut}
      objects={this.state.objects}
      setDetail={this.setDetail}
      detail={this.state.detail}
    />;

  DetailComponent = () =>
    <Detail
      currentUser={this.state.currentUser}
      logOut={this.logOut}
      detail={this.state.detail}
    />;

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
