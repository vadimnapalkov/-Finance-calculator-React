import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router";

class User extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <span className="name">{this.props.user.name}</span>
          <Link to="/login">logout</Link>
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

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(User)
);
