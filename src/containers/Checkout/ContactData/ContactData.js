import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";

import styles from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    firstName: {
      type: "text",
      placeholder: "First Name",
      value: "",
    },
    lastName: {
      type: "text",
      placeholder: "Last Name",
      value: "",
    },
    email: {
      type: "email",
      placeholder: "E-mail",
      value: "",
    },
  }

  orderHandler = (event) => {
    event.preventDefault();
    const orderId = Number(sessionStorage.getItem("orderCount")) + 1;
    sessionStorage.setItem("orderCount", String(orderId));

    const order = {
      id: orderId,
      ingredients: { ...this.props.ingredients },
      price: this.props.price,
      customerInfo: { ...this.state }
    };

    const orders = JSON.parse(sessionStorage.getItem("orders"));
    orders.push(order);
    sessionStorage.setItem("orders", JSON.stringify(orders));

    this.props.history.push("/burger-builder");
  }

  inputChangeHandler = (event, inputField) => {
    const inputValue = event.target.value;
    this.setState((prevState) => {
      const newState = { ...prevState };
      const newInputField = { ...newState[inputField] };
      newInputField.value = inputValue;
      newState[inputField] = newInputField;
      return newState;
    });
  }

  render() {
    return (
      <div className={styles.ContactData}>
        <h3>Enter your Contact Data</h3>
        <form>
          {
            Object.entries(this.state)
              .map(([input, properties]) => (
                <Input
                  key={input}
                  type={properties.type}
                  placeholder={properties.placeholder}
                  value={properties.value}
                  inputChange={(event) => this.inputChangeHandler(event, input)}
                />
              ))
          }
          <Button buttonType="Success" click={this.orderHandler}>Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
