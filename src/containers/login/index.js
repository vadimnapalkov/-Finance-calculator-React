import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginUser, LogoutUser } from "../../actions/UserActions";
import { browserHistory } from "react-router";

class Login extends Component {
  state = {
    name: "",
    pass: ""
  };
  onLogin = e => {
    e.preventDefault();
    const { name, pass } = this.state;
    this.props.LoginUser({
      name: name,
      pass: pass
    });
  };
  handleChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  };
  validate = () => {
    const { name, pass } = this.state;
    if (name.trim() && pass.trim()) {
      return true;
    }
    return false;
  };
  componentWillMount() {
    this.props.LogoutUser();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.name) browserHistory.push("/payments");
  }
  render() {
    const { name, pass } = this.state;

    return (
      <div>
        <div className="menu">
          <a href="/login">login</a>
          <a href="/register">register</a>
        </div>
        <div className="reg">
          <h1>Login</h1>
          <p>Fill in the form below to sign up!</p>
          {this.props.user.error && <p>{this.props.user.error}</p>}
          <form>
            <p>
              <input
                type="text"
                id="name"
                onChange={this.handleChange}
                value={name}
                placeholder="Username"
              />
            </p>
            <p>
              <input
                type="password"
                id="pass"
                onChange={this.handleChange}
                value={pass}
                placeholder="Password"
              />
            </p>
            <p>
              <input
                type="button"
                disabled={!this.validate()}
                onClick={this.onLogin}
                value="Sign Up"
              />
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  LoginUser,
  LogoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
