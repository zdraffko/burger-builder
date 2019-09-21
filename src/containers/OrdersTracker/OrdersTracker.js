import React, { Component } from "react";

import Order from "../../components/Order/Order";

class OrdersTracker extends Component {
  render() {
    return (
      <div>
        {
          JSON.parse(sessionStorage.getItem("orders")).map((order) => (
            <Order
              key={order.id}
              ingredients={{ ...order.ingredients }}
              price={order.price}
              customerInfo={{ ...order.customerInfo }}
            />
          ))
        }
      </div>
    );
  }
}

export default OrdersTracker;
