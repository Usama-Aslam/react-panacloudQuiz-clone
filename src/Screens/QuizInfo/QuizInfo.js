import React, { Component } from 'react';

class QuizInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        const { quizList, showTest } = this.props;
        return (
            <div>

                {quizList.map((value, index) => {
                    return (
                        <ul>
                            <li>{value.quizname}</li>
                            <li>
                                <ul>
                                    {value.quizNumber.map((quizNum, innerIndex) => {
                                        return <li key={innerIndex}>{quizNum}< button onClick={() => showTest(index, innerIndex)}>Start Test</button></li>
                                    })}
                                </ul>
                            </li>
                        </ul>)
                }
                )
                }

            </div >
        );
    }
}

export default QuizInfo;