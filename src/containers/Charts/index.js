import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

class Charts extends Component {
  componentWillMount() {
    if (!this.props.user.id) browserHistory.push("/login");
  }
  render() {
    return <div>Charts</div>;
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
)(Charts);
