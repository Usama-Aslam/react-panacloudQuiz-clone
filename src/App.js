import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Screens/Login/Login'
import Signup from './Screens/Signup/Signup';

class App extends Component {
  constructor() {
    super();
    this.state = {
      validation: false,
      user: false,
      name: null,
      userEmail: null,
      userPass: null,
      loginEmail: null,
      loginPass: null
    }
    this.updateText = this.updateText.bind(this)
    this.showLogin = this.showLogin.bind(this)
  }
  updateText(e) {
    console.log(e.target.name)
    const name = e.target.name;
    const value = e.target.value;

    if (name.match('userEmail')) {
      this.setState({
        userEmail: value
      })
    }
    else if (name.match('name')) {
      this.setState({
        name: value
      })
    }
    else if (name.match('userPassword')) {
      this.setState({
        userPass: value
      })
    }
    else if (name.match('loginEmail')) {
      this.setState({
        loginEmail: value
      })
    }
    else if (name.match('loginPass')) {
      this.setState({
        loginPass: value
      })
    }
  }

  showLogin() {
    this.setState({
      user: true
    })
  }
  hideLogin() {
    this.setState({
      user: false
    })
  }

  validation() {
    this.setState({
      validation: true
    })
    console.log(this.state.validation)
  }
  render() {
    const { name, user, userEmail, userPass, loginEmail, loginPass } = this.state;
    return (
      <div>
        {!user && <Signup updateText={this.updateText} showLogin={this.showLogin} />}
        {user && <Login updateText={this.updateText} userEmail={userEmail} userPassword={userPass} loginEmail={loginEmail} loginPass={loginPass} />}
        <p>{userEmail}</p>
        <p>{userPass}</p>
        <p>{loginEmail}</p>
        <p>{loginPass}</p>
      </div>
    );
  }
}

export default App;
