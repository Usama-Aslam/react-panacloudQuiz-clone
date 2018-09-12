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
                <table>
                    <tbody>
                        {quizList.map((value, index) => {
                            return (<tr key={index}>
                                <td>{value}</td>
                                <td><button onClick={() => showTest(index)}>Start Test</button></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default QuizInfo;
