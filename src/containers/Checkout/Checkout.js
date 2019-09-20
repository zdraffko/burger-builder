import React, { Component } from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0,
    }
  }

  componentDidMount() {
    const queryParams = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (const [key, value] of queryParams.entries()) {
      ingredients[key] = +value;
    }
    this.setState({ ingredients });
  }

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
          ingredients={this.state.ingredients}
          checkoutCanceled={this.cancelOrderHandler}
          checkoutContinued={this.continueOrderHandler}
        />
        <Route path={`${this.props.match.path}/contact-data`} component={ContactData} />
      </div>
    );
  }
}

export default Checkout;
