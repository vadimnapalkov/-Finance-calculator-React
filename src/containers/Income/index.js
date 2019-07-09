import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

class Income extends Component {
  componentWillMount() {
    if (!this.props.user.id) browserHistory.push("/login");
  }
  render() {
    return <div>Income</div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Income);
