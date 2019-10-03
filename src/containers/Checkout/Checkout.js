import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  cancelOrderHandler = () => {
    this.props.history.goBack();
  }

  continueOrderHandler = () => {
    this.props.history.replace(`${this.props.match.path}/contact-data`);
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ingredients}
          checkoutCanceled={this.cancelOrderHandler}
          checkoutContinued={this.continueOrderHandler}
        />
        <Route
          path={`${this.props.match.path}/contact-data`}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ingredients: state.ingredients });

export default connect(mapStateToProps)(Checkout);
