import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.module.css";

class ContactData extends Component {
  render() {
    return (
      <div className={styles.ContactData}>
        <h3>Enter your Contact Data</h3>
        <form>
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
          <input type="email" name="email" placeholder="Email" />
          <Button buttonType="Success" click={() => {}}>Order</Button>
          <Button buttonType="Fail" click={() => {}}>Cancel</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
