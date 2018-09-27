import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        const { updateText, validation } = this.props;
        return (
            <div>
                {/* <input type="email" onChange={updateText} name="loginEmail" />
                <input type="password" onChange={updateText} name="loginPass" />
                <button onClick={validation}>Login</button>             */}
                <form id="loginDiv">
                    <h1>Login Form</h1>
                    <img src={require("./../../Assets/images/login-logo.png")} alt="login" className="login-avatar" />
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" onChange={updateText} name="loginEmail" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" onChange={updateText} name="loginPass" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button class="btn btn-primary btn-lg" onClick={validation}>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
