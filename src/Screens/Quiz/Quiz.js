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
            score: 0,
            min: null,
            sec: null,
            quizResultFlag: false
        }
        this.minute = 1;
        this.second = 59;
        this.timeStart = null;
        this.next = this.next.bind(this);
        this.timer = this.timer.bind(this);
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
                // var quizContainer = document.getElementById('quizContainer');
                // quizContainer.style.display = 'none'
                console.log('value equal')
                console.log(this.state.correct)
                score = correct * (100 / quizQuest.length)
                console.log(score)
                this.setState({
                    score,
                    quizResultFlag: true
                })
            }
            else {
                load++
                val.checked = false;
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

    componentDidMount() {
        this.timer();
    }

    timer() {   

        this.timeStart = setInterval(() => {
            this.setState({
                min: this.minute,
                sec: this.second
            })
            --this.second;
            if (this.second == 0) {
                this.second = 60
                --this.minute;
                this.setState({
                    sec: this.second,
                    min: this.minute
                })
                if (this.minute < 0) {
                    clearInterval(this.timeStart)
                    var { score, correct } = this.state;
                    const { quizQuest, showResult } = this.props

                    this.setState({
                        min: 0,
                        sec: 0
                    })

                    console.log('value equal')
                    console.log("correct", this.state.correct)

                    score = Math.floor(correct * (100 / quizQuest.length))

                    console.log(score)

                    this.setState({
                        score,
                        quizResultFlag: true
                    })

                    showResult(score, quizQuest.length, correct)
                }
            }
        }, 300);
    }

    render() {
        const { quizQuest, showResult } = this.props
        const { question, opt1, opt2, opt3, opt4, score, min, sec, quizResultFlag, correct } = this.state;
        return (
            <div class="container-fluid">
                <div id="quizContainer">
                    <p>Time</p>
                    <div id="timer">{min} : {sec}</div>
                    <p class="lead">{question}</p>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" value="1" name="option" />
                            </div>
                        </div>
                        <input type="text" class="form-control optionClass" value={opt1} disabled />
                    </div>

                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" value="2" name="option" />
                            </div>
                        </div>
                        <input type="text" class="form-control optionClass" value={opt2} disabled />
                    </div>

                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" value="3" name="option" />
                            </div>
                        </div>
                        <input type="text" class="form-control optionClass" value={opt3} disabled />
                    </div>

                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" value="4" name="option" />
                            </div>
                        </div>
                        <input type="text" class="form-control optionClass" value={opt4} disabled />
                    </div>
                    <br />
                    {!quizResultFlag && <button className="btn btn-primary" onClick={this.next}>Submit</button>}
                    {quizResultFlag && <button className="btn btn-success" onClick={() => showResult(score, quizQuest.length, correct)}>Result</button>}
                </div>
            </div >
        );
    }
}

export default QuizInfo;
