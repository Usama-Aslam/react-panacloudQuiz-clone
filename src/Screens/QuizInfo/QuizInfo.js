import React, { Component } from 'react';

class QuizInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowDown: "glyphicon glyphicon-triangle-bottom",
            arrowUp: "glyphicon glyphicon-triangle-top",
            arrowFlag: false,
            currentIndex: null
        }
        this.testCondition = this.testCondition.bind(this)
        this.scoreCondition = this.scoreCondition.bind(this)
        this.expand = this.expand.bind(this)
    }

    testCondition(index, innerIndex) {
        let a = JSON.parse(localStorage.getItem("testStatus"));
        const { testGiven } = this.props

        console.log("test indexess ", index, innerIndex)

        return a ? !(a[index].testStatus[innerIndex].test) : !(testGiven[index].testStatus[innerIndex].test)
    }

    scoreCondition(index, innerIndex) {
        let a = JSON.parse(localStorage.getItem("testStatus"));
        const { testGiven } = this.props

        console.log("score indexess", index, innerIndex)

        return a ? (a[index].testStatus[innerIndex].score) : (testGiven[index].testStatus[innerIndex].score)
    }

    expand(index) {
        const { currentIndex } = this.state
        this.setState({
            currentIndex: index
        })
        if (index == currentIndex) {
            this.setState({
                currentIndex: null
            })
        }
    }

    render() {
        console.log(this.props);

        let a = JSON.parse(localStorage.getItem("testStatus"));

        const { quizList, showTest, testGiven, score, quizQuestion } = this.props;
        const { currentIndex } = this.state

        // console.log("test give", testGiven)
        // console.log("testSta", testGiven[0].testStatus[2].test)

        return (
            <div class="container-fluid">
                <p className="header-heading">Test Your Skill Level. Give Yourself A Tough Time. <br /> Select Your Quiz</p>

                <ul className="list-group" >
                    {quizList.map((value, index) => {
                        return (
                            <li key={index} className="list-group-item quizName" onClick={() => this.expand(index)}>{value.quizname}
                                {currentIndex == index && <ul>
                                    {value.quizNumber.map((quizNum, innerIndex) => {
                                        return (<li key={innerIndex} className="list-group-item" key={innerIndex}>
                                            {quizNum}
                                            {this.testCondition(index, innerIndex) && <span><p>Total Questions:{quizQuestion[index].quizQuestions[innerIndex].length} <br /> Total Time: 2 min</p>< button className="btn btn-primary btn-sm" onClick={() => {
                                                showTest(index, innerIndex)
                                            }}>Start Test</button></span>}
                                            &nbsp;&nbsp;&nbsp;
                                            {this.scoreCondition(index, innerIndex) && <p><span className="scoreHeading">your Score:</span>{a[index].testStatus[innerIndex].score}</p>}</li>)
                                    })}
                                </ul>}
                            </li>
                        )
                    })}
                </ul>
            </div >
        );
    }
}

export default QuizInfo;


