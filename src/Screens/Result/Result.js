import React, { Component } from 'react';

class Result extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { score, questionLength } = this.props
        return (
            <div>
                Total Question: {questionLength};
                Correct Answer: {score}
            </div >
        );
    }
}

export default Result;