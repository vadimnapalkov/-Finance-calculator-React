import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import { FetchIncomeCategories } from "../../actions/CategoriesActions";
import { FetchIncomeValues, AddIncomeValue } from "../../actions/IncomeActions";

class Income extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryname: "",
      value: ""
    };
  }
  renderIncomeValues(income, index) {
    return (
      <div key={index} className="categories">
        <li className="lipay">{income.categoryname}</li>
        <p className="update">${income.value}</p>
      </div>
    );
  }
  renderDatalist(incomeCategories, index) {
    if (incomeCategories.name === "Other") return null;
    return <option key={index}>{incomeCategories.name}</option>;
  }
  onAddValue = () => {
    if (
      this.props.categories.income.find(
        income => income.name === this.state.categoryname
      )
    ) {
      this.setState({ categoryname: "", value: "" });
      this.props.AddIncomeValue(
        this.props.user.id,
        this.props.categories.income.find(
          income => income.name === this.state.categoryname
        )._id,
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
    if (
      this.props.income.values.find(income => income.categoryname === value)
    ) {
      const valueRes = this.props.income.values.find(
        income => income.categoryname === value
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
    this.props.FetchIncomeCategories(this.props.user.id);
    this.props.FetchIncomeValues(this.props.user.id);
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
            placeholder="Incoming category"
            autoComplete="off"
            value={categoryname}
          />
          <datalist id="category" className="category">
            {this.props.categories.income.map((incomeCategories, index) =>
              this.renderDatalist(incomeCategories, index)
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
          <p>Previous incoming payments:</p>
          <ul className="categorypay">
            {this.props.income.values.map((income, index) =>
              this.renderIncomeValues(income, index)
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
    income: state.income
  };
};

const mapDispatchToProps = {
  FetchIncomeValues,
  FetchIncomeCategories,
  AddIncomeValue
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Income);
