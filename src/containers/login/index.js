import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="reg">
          <h1>Login</h1>
          <p>Fill in the form below to sign up!</p>
          <form>
            <p>
              <input type="text" id="name" placeholder="Username" />
            </p>
            <p>
              <input type="password" id="pass" placeholder="Password" />
            </p>
            <p>
              <input type="button" value="Sign Up" />
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
