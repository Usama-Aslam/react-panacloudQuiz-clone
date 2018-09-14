import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Screens/Login/Login'
import Signup from './Screens/Signup/Signup';
import QuizInfo from './Screens/QuizInfo/QuizInfo';
import Quiz from './Screens/Quiz/Quiz';

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
      quizLists: [{
        quizname: 'JAVASCRIPT',
        quizNumber: ["quiz1", "quiz2", "quiz3"]
      },
      {
        quizname: 'CSS',
        quizNumber: ["quiz1", "quiz2", "quiz3"]
      },
      {
        quizname: 'HTML',
        quizNumber: ["quiz1", "quiz2", "quiz3"]
      },],
      currentIndex: null,
      currentQuizIndex: null,
      quizQuestion: [
        {
          name: "JAVASCRIPT",
          quizQuestions: [[{
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
          }],
          [{
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
          [{
            "question": "How to push value in array?",
            "option1": "arr.push(value)",
            "option2": "arr.push.value",
            "option3": "arr.(value)",
            "option4": "arr.value.push(value)",
            "answer": "1"
          },
          {
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
          }]] //object 1 end
        },
        {
          name: "CSS",
          quizQuestions: [[{
            "question": "Css stands for?",
            "option1": "cascading style sheet'",
            "option2": "cascade sheet style",
            "option3": "color style sheet",
            "option4": "contrast style sheet",
            "answer": "1"
          },
          {
            "question": "to change the color we use",
            "option1": "color:",
            "option2": "setColor:",
            "option3": "color-style",
            "option4": "change-color",
            "answer": "1"
          }],
          [{
            "question": "how to link css",
            "option1": "using link",
            "option2": "using button",
            "option3": "using javascript",
            "option4": "using img",
            "answer": "1"
          },
          {
            "question": "to change the color we use",
            "option1": "color:",
            "option2": "setColor:",
            "option3": "color-style",
            "option4": "change-color",
            "answer": "1"
          }],
          [{
            "question": "how to link css",
            "option1": "using link",
            "option2": "using button",
            "option3": "using javascript",
            "option4": "using img",
            "answer": "1"
          },
          {
            "question": "how to link css",
            "option1": "using link",
            "option2": "using button",
            "option3": "using javascript",
            "option4": "using img",
            "answer": "1"
          }]]
        },
        {
          name: "HTML",
          quizQuestions: [[{
            "question": "what is use for image insertion",
            "option1": "img",
            "option2": "h1",
            "option3": "none",
            "option4": "body",
            "answer": "1"
          }, {
            "question": "to underline the text",
            "option1": "u",
            "option2": "underline",
            "option3": "style",
            "option4": "none",
            "answer": "1"
          }],
          [{

            "question": "HTML stands for?",
            "option1": "HYPER TEXT MARKUP LANGUAGE'",
            "option2": "HTPER TEXT TELESCOPR",
            "option3": "HELP TEXT TERMINAL LANGUAGE",
            "option4": "NONE",
            "answer": "1"
          }, {
            "question": "html use for",
            "option1": "structure",
            "option2": "styling",
            "option3": "scripting",
            "option4": "none",
            "answer": "1"
          }],
          [{
            "question": "to underline the text",
            "option1": "u",
            "option2": "underline",
            "option3": "style",
            "option4": "none",
            "answer": "1"
          }, {

            "question": "HTML stands for?",
            "option1": "HYPER TEXT MARKUP LANGUAGE'",
            "option2": "HTPER TEXT TELESCOPR",
            "option3": "HELP TEXT TERMINAL LANGUAGE",
            "option4": "NONE",
            "answer": "1"
          }]]
        }
      ]
    }
    this.updateText = this.updateText.bind(this)
    this.showLogin = this.showLogin.bind(this)
    this.checkValidation = this.checkValidation.bind(this)
    this.showTest = this.showTest.bind(this)
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
  showTest(index, innerIndex) {
    console.log('index**', index)
    console.log('innerIndex**', innerIndex)
    this.setState({
      quizInfoFlag: true,
      currentIndex: index,
      currentQuizIndex: innerIndex
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
    const { name, userFlag, userEmail, userPass, loginEmail, loginPass, validFlag, quizLists, quizInfoFlag, currentIndex, currentQuizIndex, quizQuestion } = this.state;
    return (
      <div>
        {!userFlag && !validFlag && <Signup updateText={this.updateText} showLogin={this.showLogin} />}
        {userFlag && !validFlag && <Login validation={this.checkValidation} updateText={this.updateText} />}
        {userFlag && validFlag && !quizInfoFlag && <QuizInfo quizList={quizLists} showTest={this.showTest} />}
        {userFlag && validFlag && quizInfoFlag && <Quiz quizQuest={quizQuestion[currentIndex].quizQuestions[currentQuizIndex]} />}
      </div>
    );
  }
}

export default App;
