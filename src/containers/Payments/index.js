import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import { FetchPaymentsCategories } from "../../actions/CategoriesActions";
import {
  FetchPaymentsValues,
  AddPaymentsValue
} from "../../actions/PaymentsActions";

class Payments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryname: "",
      value: ""
    };
  }
  renderPaymentsValues(payment, index) {
    return (
      <div key={index} className="categories">
        <li className="lipay" title={payment.categoryname}>
          {payment.categoryname}
        </li>
        <p className="update">${payment.value}</p>
      </div>
    );
  }
  renderDatalist(paymentCategories, index) {
    if (paymentCategories.name === "Other") return null;
    return <option key={index}>{paymentCategories.name}</option>;
  }
  onAddValue = () => {
    if (
      this.props.categories.payments.find(
        pay => pay.name === this.state.categoryname
      )
    ) {
      this.setState({ categoryname: "", value: "" });
      this.props.AddPaymentsValue(
        this.props.user.id,
        this.props.categories.payments.find(
          pay => pay.name === this.state.categoryname
        ).id,
        this.state.value
      );
    } else {
      alert("Please enter a category from the list");
    }
  };
  handleChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
    if (id === "categoryname") this.CheckCategoryName(value);
  };
  CheckCategoryName = value => {
    if (this.props.payments.values.find(pay => pay.categoryname === value)) {
      const valueRes = this.props.payments.values.find(
        pay => pay.categoryname === value
      ).value;
      this.setState({ value: valueRes });
    } else this.setState({ value: "" });
  };
  validate = () => {
    const { categoryname, value } = this.state;
    if (categoryname && value) {
      return true;
    }
    return false;
  };
  componentWillMount() {
    if (!this.props.user.id) browserHistory.push("/login");
  }
  componentDidMount() {
    this.props.FetchPaymentsCategories(this.props.user.id);
    this.props.FetchPaymentsValues(this.props.user.id);
  }
  render() {
    const { categoryname, value } = this.state;
    return (
      <div>
        <div className="payment">
          <input
            list="category"
            id="categoryname"
            name="category"
            className="select"
            onChange={this.handleChange}
            placeholder="Payment category"
            autoComplete="off"
            value={categoryname}
          />
          <datalist id="category" className="category">
            {this.props.categories.payments.map((paymentCategories, index) =>
              this.renderDatalist(paymentCategories, index)
            )}
            <option key={0}>Other</option>;
          </datalist>
          <p>
            <input
              type="number"
              id="value"
              className="sum"
              value={value}
              name="sum"
              onChange={this.handleChange}
              placeholder="Enter value"
              autoComplete="off"
            />
          </p>
          <p>
            <input
              className="addsum"
              type="submit"
              value="Add payment"
              onClick={this.onAddValue}
              disabled={!this.validate()}
            />
          </p>
        </div>
        <div className="pay">
          <p>Previous payments:</p>
          <ul className="categorypay">
            {this.props.payments.values.map((pay, index) =>
              this.renderPaymentsValues(pay, index)
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    categories: state.categories,
    payments: state.payments
  };
};

const mapDispatchToProps = {
  FetchPaymentsValues,
  FetchPaymentsCategories,
  AddPaymentsValue
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payments);
