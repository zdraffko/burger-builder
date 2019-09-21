import React, { Component } from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {},
    price: null,
  }

  componentDidMount() {
    const queryParams = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = null;
    for (const [key, value] of queryParams.entries()) {
      if (key === "price") {
        price = value;
      } else {
        ingredients[key] = +value;
      }
    }
    this.setState({ ingredients, price });
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
        <Route
          path={`${this.props.match.path}/contact-data`}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.price}
              history={props.history}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
