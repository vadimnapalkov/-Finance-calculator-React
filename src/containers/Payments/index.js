import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

class Payments extends Component {
  componentWillMount() {
    if (!this.props.user.id) browserHistory.push("/login");
  }
  render() {
    return <div>Payments</div>;
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
)(Payments);
