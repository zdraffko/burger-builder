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

const BuildControls = ({ addIngredient, removeIngredient, disabledIngredients }) => (
  <div className={styles.BuildControls}>
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
  </div>
);

BuildControls.propTypes = {
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  disabledIngredients: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default BuildControls;
