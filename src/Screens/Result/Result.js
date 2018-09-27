import React, { Component } from 'react';

class Result extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { score, questionLength, correct, moreQuiz } = this.props
        return (
            <div id="resultContainer">
                <p>Total Question: {questionLength}</p>
                <p>Correct Answer: {correct}</p>
                <p>Your Score: {score}</p>
                <button class="btn btn-info" onClick={moreQuiz} >Show Quiz</button>
            </div >
        );
    }
}

export default Result;