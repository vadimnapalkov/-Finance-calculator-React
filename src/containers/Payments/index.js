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
  renderPaymentsValues(pay, index) {
    return (
      <div key={index} className="categories">
        <li className="lipay">{pay.categoryname}</li>
        <p className="update">${pay.val}</p>
      </div>
    );
  }
  renderDatalist(pay, index) {
    if (pay.name === "Other") return null;
    return <option key={index}>{pay.name}</option>;
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
        this.state.categoryname,
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
    if (this.props.categories.payments.find(pay => pay.name === value)) {
      const val = this.props.payments.values.find(
        pay => pay.categoryname === value
      ).val;
      this.setState({ value: val });
    } else this.setState({ value: "" });
  };
  validate = () => {
    const { categoryname, value } = this.state;
    if (categoryname.trim() && value.trim()) {
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
            {this.props.categories.payments.map((pay, index) =>
              this.renderDatalist(pay, index)
            )}
            <option>Other</option>
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
