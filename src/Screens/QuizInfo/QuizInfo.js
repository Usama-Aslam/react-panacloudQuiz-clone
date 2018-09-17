import React, { Component } from 'react';

class QuizInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        let a = JSON.parse(localStorage.getItem("testStatus"));
        const { quizList, showTest, testGiven, score } = this.props;
        console.log("test give", testGiven)
        console.log("testSta", testGiven[0].testStatus[2].test)
        return (
            <div>
                {quizList.map((value, index) => {
                    return (
                        <ul key={index}>
                            <li>{value.quizname}</li>
                            <li>
                                {value.quizNumber.map((quizNum, innerIndex) => {
                                    return <ul key={innerIndex}>
                                        {<li key={innerIndex}>{quizNum}{(a ? !(a[index].testStatus[innerIndex].test) : !(testGiven[index].testStatus[innerIndex].test)) && < button onClick={() => {
                                            showTest(index, innerIndex)
                                        }}>Start Test</button>}     {(a ? (a[index].testStatus[innerIndex].score) : (testGiven[index].testStatus[innerIndex].score)) && <span>{a[index].testStatus[innerIndex].score}</span>}</li>}
                                    </ul>
                                })}
                            </li>
                        </ul>)
                })}
            </div >
        );
    }
}

export default QuizInfo;