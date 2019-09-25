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
      validationRules: { isRequired: true },
      isValid: false,
      isTouched: false,
    },
    lastName: {
      type: "text",
      placeholder: "Last Name",
      value: "",
      validationRules: { isRequired: true },
      isValid: false,
      isTouched: false,
    },
    email: {
      type: "email",
      placeholder: "E-mail",
      value: "",
      validationRules: { isRequired: true },
      isValid: false,
      isTouched: false,
    },
    isFormValid: false,
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
      newInputField.isValid = this.checkIsInputValid(inputValue, newInputField.validationRules);
      newInputField.isTouched = true;
      newState[inputField] = newInputField;

      newState.isFormValid = this.checkIsFormValid(newState);

      return newState;
    });
  }

  checkIsInputValid = (inputValue, rules) => {
    if (rules.isRequired) {
      return inputValue.trim() !== "";
    }
    return true;
  }

  checkIsFormValid = (currentState) => {
    let isFormValid = true;
    for (const inputProperties of Object.values(currentState)) {
      if (typeof (inputProperties) === "boolean") {
        break;
      }

      if (!inputProperties.isValid) {
        isFormValid = false;
        break;
      }
    }

    return isFormValid;
  }

  render() {
    return (
      <div className={styles.ContactData}>
        <h3>Enter your Contact Data</h3>
        <form>
          {
            Object.entries(this.state)
              .map(([input, properties]) => (
                input !== "isFormValid"
                  ? (
                    <Input
                      key={input}
                      type={properties.type}
                      placeholder={properties.placeholder}
                      value={properties.value}
                      isValid={properties.isValid}
                      isTouched={properties.isTouched}
                      inputChange={(event) => this.inputChangeHandler(event, input)}
                    />
                  )
                  : null
              ))
          }
          <Button buttonType="Success" isDisabled={!this.state.isFormValid} click={this.orderHandler}>Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
