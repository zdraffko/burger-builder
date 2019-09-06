import React from "react";
import PropTypes from "prop-types";

import styles from "./Ingredient.module.css";

const Ingredient = ({ type }) => {
  let ingredient;

  switch (type) {
    case "breadTop":
      ingredient = (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1} />
          <div className={styles.Seeds2} />
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={styles.Meat} />;
      break;
    case "cheese":
      ingredient = <div className={styles.Cheese} />;
      break;
    case "salad":
      ingredient = <div className={styles.Salad} />;
      break;
    case "bacon":
      ingredient = <div className={styles.Bacon} />;
      break;
    case "breadBottom":
      ingredient = <div className={styles.BreadBottom} />;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

Ingredient.propTypes = { type: PropTypes.string.isRequired };

export default Ingredient;
