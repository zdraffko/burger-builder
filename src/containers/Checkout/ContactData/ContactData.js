import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    customerInfo: {
      firstName: "zdr",
      lastName: "avko",
      email: "test@gmail.com",
    }
  }

  orderHandler = (event) => {
    event.preventDefault();
    const orderId = Number(sessionStorage.getItem("orderCount")) + 1;
    sessionStorage.setItem("orderCount", String(orderId));

    const order = {
      id: orderId,
      ingredients: { ...this.props.ingredients },
      price: this.props.price,
      customerInfo: { ...this.state.customerInfo }
    };

    const orders = JSON.parse(sessionStorage.getItem("orders"));
    orders.push(order);
    sessionStorage.setItem("orders", JSON.stringify(orders));

    this.props.history.push("/burger-builder");
  }

  render() {
    return (
      <div className={styles.ContactData}>
        <h3>Enter your Contact Data</h3>
        <form>
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
          <input type="email" name="email" placeholder="Email" />
          <Button buttonType="Success" click={this.orderHandler}>Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
