import React from "react";
import PropTypes from "prop-types";

import "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, price }) => {
  const ingredientsList = Object.keys(ingredients)
    .map((ingredient) => {
      if (ingredients[ingredient] === 0) {
        return null;
      }

      return (
        <li
          key={ingredient}
        ><span>{ingredient}</span>: {ingredients[ingredient]}
        </li>
      );
    });

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientsList}
      </ul>
      <h3>Your total price is: {price}$</h3>
      <p>Continue to Checkout?</p>
    </>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired,
  price: PropTypes.number.isRequired,
};

export default OrderSummary;
