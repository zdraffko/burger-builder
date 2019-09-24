import React from "react";

import styles from "./Order.module.css";

const Order = ({ ingredients, price, customerInfo }) => {
  const transformedIngredients = Object.entries(ingredients)
    .map((ingredient) => (ingredient[1] !== 0 ? <span key={ingredient[0]}>{`${ingredient[0]}: ${ingredient[1]}`}</span> : null));
  return (
    <div className={styles.Order}>
      <p>Ingredients: {transformedIngredients}</p>
      <p>Price: {price}</p>
      <p>
        Order is for: {customerInfo.firstName.value} {customerInfo.lastName.value},
        with the following e-mail: {customerInfo.email.value}
      </p>
    </div>
  );
};

export default Order;
