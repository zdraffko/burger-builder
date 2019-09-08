import React from "react";
import PropTypes from "prop-types";

import Control from "./Control/Control";
import styles from "./BuildControls.module.css";

const ingredientInfo = [
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
];

const BuildControls = ({
  price,
  isPurchasable,
  order,
  addIngredient,
  removeIngredient,
  disabledIngredients,
}) => (
  <div className={styles.BuildControls}>
    <p>Current Price: <strong>{price}$</strong></p>
    {
      ingredientInfo.map((ingredient) => (
        <Control
          key={ingredient.label}
          label={ingredient.label}
          add={() => addIngredient(ingredient.type)}
          remove={() => removeIngredient(ingredient.type)}
          isDisabled={disabledIngredients[ingredient.type]}
        />
      ))
    }
    <button
      type="button"
      className={styles.OrderButton}
      disabled={!isPurchasable}
      onClick={order}
    >Order now
    </button>
  </div>
);

BuildControls.propTypes = {
  price: PropTypes.number.isRequired,
  isPurchasable: PropTypes.bool.isRequired,
  order: PropTypes.func.isRequired,
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  disabledIngredients: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default BuildControls;
