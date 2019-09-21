import React, { Component } from "react";

import Order from "../../components/Order/Order";

class OrdersTracker extends Component {
  state = { orders: {} }

  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

export default OrdersTracker;
