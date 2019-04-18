import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import {
  FetchPaymentsCategories,
  FetchIncomeCategories,
  AddCategoryInc,
  AddCategoryPay,
  DeletePayCategory,
  DeleteIncCategory,
  RenameCategoryPay,
  RenameCategoryInc
} from "../../actions/CategoriesActions";
import Modal from "../../components/Modal";

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenPayADD: false,
      isOpenIncADD: false,
      isOpenPayRename: false,
      isOpenIncRename: false,
      newnamepay: "",
      newnameinc: "",
      namepay: "",
      nameinc: "",
      idpay: "",
      idinc: "",
      Save: true,
      classInput: "error1",
      classButton: "saveerr"
    };
  }
  renderPayments(pay, index) {
    if (pay.name === "Other") return null;
    return (
      <div key={index} className="categories">
        <li className="li">{pay.name}</li>
        <input
          id={pay.id}
          className="update"
          type="image"
          name={pay.name}
          src="/images/edit.png"
          onClick={this.toggleModalPayRename}
        />
        <input
          id={pay.id}
          name={pay.name}
          type="image"
          src="/images/delete.png"
          className="delete"
          onClick={this.onDeleteCategoryPay}
        />
      </div>
    );
  }
  renderIncome(inc, index) {
    if (inc.name === "Other") return null;
    return (
      <div key={index} className="categories">
        <li className="li">{inc.name}</li>
        <input
          id={inc.id}
          className="update"
          type="image"
          name={inc.name}
          src="/images/edit.png"
          onClick={this.toggleModalIncRename}
        />
        <input
          id={inc.id}
          name={inc.name}
          type="image"
          src="/images/delete.png"
          className="delete"
          onClick={this.onDeleteCategoryInc}
        />
      </div>
    );
  }
  onAddCategoryPay = () => {
    this.props.AddCategoryPay(this.props.user.id, this.state.newnamepay);
    this.toggleModalPayADD();
  };
  onAddCategoryInc = () => {
    this.toggleModalIncADD();
    this.props.AddCategoryInc(this.props.user.id, this.state.newnameinc);
  };
  onRenameCategoryPay = () => {
    this.setState({
      isOpenPayRename: !this.state.isOpenPayRename
    });
    this.props.RenameCategoryPay(
      this.state.idpay,
      this.state.newnamepay,
      this.state.namepay,
      this.props.user.id
    );
  };
  onRenameCategoryInc = () => {
    this.setState({
      isOpenIncRename: !this.state.isOpenIncRename
    });
    this.props.RenameCategoryInc(
      this.state.idinc,
      this.state.newnameinc,
      this.state.nameinc,
      this.props.user.id
    );
  };
  onDeleteCategoryPay = e => {
    const { id, name } = e.currentTarget;
    const userid = this.props.user.id;
    if (confirm("Вы действительно хотите удалить категорию " + name + "?")) {
      this.props.DeletePayCategory(id, name, userid);
    }
  };
  onDeleteCategoryInc = e => {
    const { id, name } = e.currentTarget;
    const userid = this.props.user.id;
    if (confirm("Вы действительно хотите удалить категорию " + name + "?")) {
      this.props.DeleteIncCategory(id, name, userid);
    }
  };
  handleChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
    if (id === "newnamepay") this.CheckNamePay(value);
    if (id === "newnameinc") this.CheckNameInc(value);
  };
  CheckNamePay = value => {
    if (
      this.props.categories.payments.find(pay => pay.name === value) ||
      value === ""
    ) {
      this.setState({
        Save: true,
        classInput: "error1",
        classButton: "saveerr"
      });
    } else {
      this.setState({ Save: false, classInput: "", classButton: "save" });
    }
  };
  CheckNameInc = value => {
    if (
      this.props.categories.income.find(inc => inc.name === value) ||
      value === ""
    ) {
      this.setState({
        Save: true,
        classInput: "error1",
        classButton: "saveerr"
      });
    } else {
      this.setState({ Save: false, classInput: "", classButton: "save" });
    }
  };
  toggleModalPayADD = () => {
    this.setState({
      isOpenPayADD: !this.state.isOpenPayADD,
      newnamepay: "",
      Save: true,
      classInput: "error1",
      classButton: "saveerr"
    });
  };
  toggleModalIncADD = () => {
    this.setState({
      isOpenIncADD: !this.state.isOpenIncADD,
      newnameinc: "",
      Save: true,
      classInput: "error1",
      classButton: "saveerr"
    });
  };
  toggleModalPayRename = e => {
    const { id, name } = e.currentTarget;
    this.setState({
      isOpenPayRename: !this.state.isOpenPayRename,
      newnamepay: name,
      namepay: name,
      idpay: id,
      Save: true,
      classInput: "error1",
      classButton: "saveerr"
    });
  };
  toggleModalIncRename = e => {
    const { id, name } = e.currentTarget;
    this.setState({
      isOpenIncRename: !this.state.isOpenIncRename,
      newnameinc: name,
      nameinc: name,
      idinc: id,
      Save: true,
      classInput: "error1",
      classButton: "saveerr"
    });
  };
  componentWillMount() {
    if (!this.props.user.id) browserHistory.push("/login");
  }
  componentDidMount() {
    this.props.FetchPaymentsCategories(this.props.user.id);
    this.props.FetchIncomeCategories(this.props.user.id);
  }
  render() {
    const { newnamepay, newnameinc } = this.state;
    const { payments, income } = this.props.categories;
    return (
      <div>
        <Modal show={this.state.isOpenPayADD} onClose={this.toggleModalPayADD}>
          <p>
            <label>Add payments:</label>
          </p>
          <p>
            <input
              id="newnamepay"
              type="text"
              className={this.state.classInput}
              placeholder="New name"
              autoComplete="off"
              onChange={this.handleChange}
              value={newnamepay}
            />
          </p>
          <p>
            <button
              className={this.state.classButton}
              onClick={this.onAddCategoryPay}
              disabled={this.state.Save}
            >
              Save
            </button>
          </p>
        </Modal>
        <Modal
          show={this.state.isOpenPayRename}
          onClose={this.toggleModalPayRename}
        >
          <p>
            <label>Rename payment:</label>
          </p>
          <p>
            <input
              id="newnamepay"
              type="text"
              className={this.state.classInput}
              placeholder="New name"
              autoComplete="off"
              onChange={this.handleChange}
              value={newnamepay}
            />
          </p>
          <p>
            <button
              className={this.state.classButton}
              onClick={this.onRenameCategoryPay}
              disabled={this.state.Save}
            >
              Save
            </button>
          </p>
        </Modal>
        <div className="pay">
          <p>Payments categories</p>
          <p className="new">Add new</p>
          <input
            type="image"
            src="/images/add.png"
            onClick={this.toggleModalPayADD}
            className="add"
          />
          <ul className="category">
            {payments.map((pay, index) => this.renderPayments(pay, index))}
          </ul>
        </div>
        <Modal show={this.state.isOpenIncADD} onClose={this.toggleModalIncADD}>
          <p>
            <label>Add incoming:</label>
          </p>
          <p>
            <input
              id="newnameinc"
              type="text"
              className={this.state.classInput}
              placeholder="New name"
              autoComplete="off"
              onChange={this.handleChange}
              value={newnameinc}
            />
          </p>
          <p>
            <button
              className={this.state.classButton}
              onClick={this.onAddCategoryInc}
              disabled={this.state.Save}
            >
              Save
            </button>
          </p>
        </Modal>
        <Modal
          show={this.state.isOpenIncRename}
          onClose={this.toggleModalIncRename}
        >
          <p>
            <label>Rename income:</label>
          </p>
          <p>
            <input
              id="newnameinc"
              type="text"
              className={this.state.classInput}
              placeholder="New name"
              autoComplete="off"
              onChange={this.handleChange}
              value={newnameinc}
            />
          </p>
          <p>
            <button
              className={this.state.classButton}
              onClick={this.onRenameCategoryInc}
              disabled={this.state.Save}
            >
              Save
            </button>
          </p>
        </Modal>
        <div className="pay">
          <p>Incoming categories</p>
          <p className="new">Add new</p>
          <input
            type="image"
            src="/images/add.png"
            className="add"
            onClick={this.toggleModalIncADD}
          />
          <ul className="category">
            {income.map((pay, index) => this.renderIncome(pay, index))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    categories: state.categories
  };
};

const mapDispatchToProps = {
  FetchPaymentsCategories,
  FetchIncomeCategories,
  AddCategoryInc,
  AddCategoryPay,
  DeletePayCategory,
  DeleteIncCategory,
  RenameCategoryPay,
  RenameCategoryInc
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
