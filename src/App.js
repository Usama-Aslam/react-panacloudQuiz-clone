import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Screens/Login/Login'
import Signup from './Screens/Signup/Signup';

class App extends Component {
  constructor() {
    super();
    this.state = {
      validCondition: false,
      userFlag: false,
      name: '',
      userEmail: '',
      userPass: '',
      loginEmail: '',
      loginPass: ''
    }
    this.updateText = this.updateText.bind(this)
    this.showLogin = this.showLogin.bind(this)
    this.checkValidation = this.checkValidation.bind(this)
  }
  async updateText(e) {
    console.log(e.target.name)
    const name = e.target.name;
    const value = e.target.value;

    if (name.match('userEmail')) {
      await this.setState({
        userEmail: value
      })
      localStorage.setItem('email', this.state.userEmail)
    }
    else if (name.match('name')) {
      await this.setState({
        name: value
      })
      localStorage.setItem('name', this.state.name)

    }
    else if (name.match('userPassword')) {
      await this.setState({
        userPass: value
      })
      localStorage.setItem('password', this.state.userPass)
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
    // localStorage.setItem('email', this.state.userEmail)
    // localStorage.setItem('name', this.state.name)
    // localStorage.setItem('password', this.state.userPass)
  }

  showLogin() {
    this.setState({
      userFlag: true
    })
  }
  hideLogin() {
    this.setState({
      userFlag: false
    })
  }
  async checkValidation() {
    const { userEmail, loginEmail } = this.state
    if (userEmail.match(loginEmail)) {
      await this.setState({
        validCondition: true
      })
    }
    console.log("Email is Valid :", this.state.validCondition)
  }
  render() {
    const { name, userFlag, userEmail, userPass, loginEmail, loginPass } = this.state;
    return (
      <div>
        {!userFlag && <Signup updateText={this.updateText} showLogin={this.showLogin} />}
        {userFlag && <Login validation={this.checkValidation} updateText={this.updateText} userEmail={userEmail} userPassword={userPass} loginEmail={loginEmail} loginPass={loginPass} />}
        <p>{userEmail}</p>
        <p>{userPass}</p>
        <p>{loginEmail}</p>
        <p>{loginPass}</p>
      </div>
    );
  }
}

export default App;
