import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import styles from "./CheckoutSummary.module.css";

const CheckoutSummary = ({ ingredients, checkoutCanceled, checkoutContinued }) => (
  <div className={styles.CheckoutSummary}>
    <h1>We hope it tastes well!</h1>
    <div className={styles.BurgerPreview}>
      <Burger ingredients={ingredients} />
    </div>
    <Button buttonType="Success" click={checkoutContinued}>Continue</Button>
    <Button buttonType="Fail" click={checkoutCanceled}>Cancel</Button>
  </div>
);

export default CheckoutSummary;
