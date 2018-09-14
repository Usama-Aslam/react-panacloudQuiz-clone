import React, { Component } from 'react';

class QuizInfo extends Component {
    constructor(props) {
        super(props);
        const { quizQuest } = this.props;
        this.state = {
            question: quizQuest[0].question,
            opt1: quizQuest[0].option1,
            opt2: quizQuest[0].option2,
            opt3: quizQuest[0].option3,
            opt4: quizQuest[0].option4,
            load: 0,
            correct: 0,
            score: 0
        }
    }
    next() {
        const { quizQuest } = this.props;
        var { load, correct, score } = this.state;

        var val = document.querySelector("input[name='option']:checked");
        if (val == null) {
            alert('select value')
        }
        else {
            if (quizQuest[load].answer.match(val.value)) {
                console.log("load**", load)
                console.log("answer**", quizQuest[load].answer)
                this.setState({ correct: ++correct })
            }

            if (quizQuest.length - 1 == load) {
                var quizContainer = document.getElementById('quizContainer');
                quizContainer.style.display = 'none'
                console.log('value equal')
                console.log(this.state.correct)
                score = correct * (100 / quizQuest.length)
                console.log(score)
                this.setState({ score })
            }
            else {
                load++
                const question = quizQuest[load].question
                const option1 = quizQuest[load].option1
                const option2 = quizQuest[load].option2
                const option3 = quizQuest[load].option3
                const option4 = quizQuest[load].option4
                const answer = quizQuest[load].answer
                this.setState({
                    question,
                    opt1: option1,
                    opt2: option2,
                    opt3: option3,
                    opt4: option4,
                    load: ++this.state.load
                })

            }
        }
    }
    render() {
        const { quizQuest } = this.props
        const { question, opt1, opt2, opt3, opt4, score } = this.state;

        console.log(this.state.question)
        return (
            <div>
                <div id="quizContainer">
                    <h3>{question}</h3>
                    <input type="radio" value="1" name="option" />{opt1}<br />
                    <input type="radio" value="2" name="option" />{opt2} <br />
                    <input type="radio" value="3" name="option" />{opt3} <br />
                    <input type="radio" value="4" name="option" />{opt4} <br />
                    <button onClick={this.next.bind(this)}>click</button>
                </div>
            </div>
        );
    }
}

export default QuizInfo;
