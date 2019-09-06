import React from "react";

import Ingredient from "./Ingredient/Ingredient";
import styles from "./Burger.module.css";

const Burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients)
    .map((ingredient) => [...Array(ingredients[ingredient])]
      .map((value, index) => (
        <Ingredient
          type={ingredient}
          key={ingredient + value + index.toString()}
        />
      )));

  let isBurgerEmpty = true;
  for (const ingredient of transformedIngredients) {
    if (ingredient.length > 0) {
      isBurgerEmpty = false;
      break;
    }
  }

  return (
    <div className={styles.Burger}>
      <Ingredient type="breadTop" />
      {isBurgerEmpty ? "Please add ingredients" : transformedIngredients}
      <Ingredient type="breadBottom" />
    </div>
  );
};

export default Burger;
