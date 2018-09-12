import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Screens/Login/Login'
import Signup from './Screens/Signup/Signup';
import QuizInfo from './Screens/QuizInfo/QuizInfo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      validFlag: false,
      userFlag: false,
      quizInfoFlag: false,
      name: '',
      userEmail: '',
      userPass: '',
      loginEmail: '',
      loginPass: '',
      quizLists: ['html', 'css', 'javaScript'],
      currentIndex: null,
      quizQuestion: [
        [{

          "question": "How to create alert box?",
          "option1": "alert='hello world'",
          "option2": "aler('hello world')",
          "option3": "alert.('hello world')",
          "option4": "alert('hello world')",
          "answer": "4"
        },
        {

          "question": "How to create variable?",
          "option1": "variable name = 'ali'",
          "option2": "var name = 'ali'",
          "option3": "variable: 'ali'",
          "option4": "variable. 'ali'",
          "answer": "2"
        },
        {

          "question": "How to create function?",
          "option1": "Function(){}",
          "option2": "function.create()",
          "option3": "function(){}",
          "option4": "function{}",
          "answer": "3"
        },
        {

          "question": "How to push value in array?",
          "option1": "arr.push(value)",
          "option2": "arr.push.value",
          "option3": "arr.(value)",
          "option4": "arr.value.push(value)",
          "answer": "1"
        },
        {

          "question": "What is javascript",
          "option1": "programming language",
          "option2": "scripting language",
          "option3": "codding language",
          "option4": "web language",
          "answer": "2"
        }],
        ``
      ]
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
  showTest(index) {
    this.setState({
      quizInfoFlag: true,
      currentIndex: index
    })

  }
  async checkValidation() {
    const { userEmail, loginEmail, userPass } = this.state
    if ((userEmail.match(localStorage.getItem('email'))) && (userPass.match(localStorage.getItem('password')))) {
      await this.setState({
        validFlag: true
      })
    }
    console.log("Email is Valid :", this.state.validFlag)
  }


  render() {
    const { name, userFlag, userEmail, userPass, loginEmail, loginPass, validFlag, quizLists, quizInfoFlag, currentIndex } = this.state;
    return (
      <div>
        {!userFlag && !validFlag && <Signup updateText={this.updateText} showLogin={this.showLogin} />}
        {userFlag && !validFlag && <Login validation={this.checkValidation} updateText={this.updateText} />}
        {userFlag && validFlag && !quizInfoFlag && <QuizInfo quizList={quizLists} />}
        {userFlag && validFlag && quizInfoFlag && <Quiz />}
      </div>
    );
  }
}

export default App;
