import React, { Component } from "react";
import { connect } from "react-redux";

class User extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <span className="name">{this.props.user.name}</span>
          <a href="/login">logout</a>
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

export default connect(
  mapStateToProps,
  null
)(User);
