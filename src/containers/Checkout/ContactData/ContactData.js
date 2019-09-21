import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
    console.log(this.props.price);
    this.props.history.push("/");
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
