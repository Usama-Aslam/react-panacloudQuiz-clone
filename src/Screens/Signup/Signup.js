import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        const { updateText, showLogin } = this.props;
        return (
            <div>
                <h1 className="heading">React Quiz App</h1>
                {/* Name:<input type="name" onChange={updateText} name="name" /><br />
                Email:<input type="email" onChange={updateText} name="userEmail" /><br />
                Password:<input type="password" onChange={updateText} name="userPassword" /><br />
                <button onClick={showLogin}>SignUp</button> */}
                <div id="signUpDiv">
                    <h1>Sign Up</h1>
                    <form>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter Your Name" onChange={updateText} />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" onChange={updateText} name="userEmail" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" onChange={updateText} name="userPassword" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg" onClick={showLogin}>SignUp</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;
