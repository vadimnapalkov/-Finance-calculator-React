import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import { Pie } from "react-chartjs-2";
import { FetchDates, FetchDataForCharts } from "../../actions/ChartsActions";
import { Credit, Debit, Total } from "../../selectors";

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  renderSelectDates(data, index) {
    return <option key={index}>{data}</option>;
  }
  renderCredit(payments) {
    let credit = Credit(payments);
    return <p id="credit">Credit: {credit}$</p>;
  }
  renderDebit(incoming) {
    let debit = Debit(incoming);
    return <p id="debit">Debit: {debit}$</p>;
  }

  renderTotal(payments, incoming) {
    let total = Total(payments, incoming);
    return <p id="total">Total: {total}$</p>;
  }

  renderPaymentsChart(data) {
    let color = [];
    for (let count = 0; count < data.paymentsCategories.length; count++)
      color.push(this.getRandomColorHex());
    const dataPayments = {
      labels: data.paymentsCategories,
      datasets: [
        {
          label: "Payments chart",
          backgroundColor: color,
          data: data.payments
        }
      ]
    };
    return <Pie data={dataPayments} options={{ legend: { display: false } }} />;
  }
  renderIncomingChart(data) {
    let color = [];
    for (let count = 0; count < data.incomingCategories.length; count++)
      color.push(this.getRandomColorHex());
    const dataIncoming = {
      labels: data.incomingCategories,
      datasets: [
        {
          label: "Incoming chart",
          backgroundColor: color,
          data: data.incoming
        }
      ]
    };
    return <Pie data={dataIncoming} options={{ legend: { display: false } }} />;
  }
  ChangeNewDate = e => {
    const { value } = e.currentTarget;
    this.props.FetchDataForCharts(this.props.user.id, value);
  };
  getRandomColorHex() {
    var hex = "0123456789ABCDEF",
      color = "#";
    for (var i = 1; i <= 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.dates.values[0] && this.state.counter < 1) {
      this.props.FetchDataForCharts(
        this.props.user.id,
        nextProps.dates.values[0]
      );
      this.setState({ counter: this.state.counter + 1 });
    }
  }
  componentWillMount() {
    if (!this.props.user.id) browserHistory.push("/login");
    this.props.FetchDates(this.props.user.id);
  }
  render() {
    return (
      <div>
        <div className="date">
          <p>Report month</p>
          <select id="date" name="date" onChange={this.ChangeNewDate}>
            {this.props.dates.values.map((date, index) =>
              this.renderSelectDates(date, index)
            )}
          </select>
        </div>
        <div className="chart">
          <div className="paychart">
            <p>Payments chart</p>
            {this.renderPaymentsChart(this.props.charts.data)}
            {this.renderCredit(this.props.charts.data.payments)}
            <p id="credit" />
          </div>
          <div className="paychart">
            <p>Incoming chart</p>
            {this.renderIncomingChart(this.props.charts.data)}
            {this.renderDebit(this.props.charts.data.incoming)}
            <p id="debit" />
          </div>
        </div>
        {this.renderTotal(
          this.props.charts.data.payments,
          this.props.charts.data.incoming
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    dates: state.dates,
    charts: state.charts
  };
};

const mapDispatchToProps = { FetchDates, FetchDataForCharts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Charts);
