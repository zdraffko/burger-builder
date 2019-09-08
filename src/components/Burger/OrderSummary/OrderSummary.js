import React from "react";
import PropTypes from "prop-types";

import "./OrderSummary.module.css";

const OrderSummary = ({ ingredients }) => {
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
      <p>Continue to Checkout?</p>
    </>
  );
};

OrderSummary.propTypes = { ingredients: PropTypes.objectOf(PropTypes.number).isRequired };

export default OrderSummary;
