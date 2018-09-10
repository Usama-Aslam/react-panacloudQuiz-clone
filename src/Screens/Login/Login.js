import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    validation() {
        const { loginEmail, loginPass, userEmail, userPass, validation } = this.props
        if (userEmail.match(loginEmail)) {
            validation;
            console.log('valid')
        }
    }
    render() {
        console.log(this.props)
        const { updateText } = this.props;
        return (
            <div>
                <input type="email" onChange={updateText} name="loginEmail" />
                <input type="password" onChange={updateText} name="loginPass" />
                <button onClick={() => this.validation()}>Login</button>
            </div>
        );
    }
}

export default Login;
