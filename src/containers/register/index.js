import React, { Component } from "react";
import { connect } from "react-redux";
import { RegisterUser, LogoutUser } from "../../actions/UserActions";
import { browserHistory } from "react-router";

class Register extends Component {
  state = {
    name: "",
    pass: ""
  };
  onRegister = e => {
    e.preventDefault();
    const { name, pass } = this.state;
    this.props.RegisterUser({
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
          <h1>Register</h1>
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
                onClick={this.onRegister}
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
  RegisterUser,
  LogoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
