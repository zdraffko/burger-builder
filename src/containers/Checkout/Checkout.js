import React, { Component } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      meat: 1,
      cheese: 1,
      salad: 1,
      bacon: 1,
    }
  }

  cancelOrderHandler = () => {
    this.props.history.goBack();
  }

  continueOrderHandler = () => {

  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCanceled={this.cancelOrderHandler}
          checkoutContinued={this.continueOrderHandler}
        />
      </div>
    );
  }
}

export default Checkout;
