import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  ingredientsPrices = {
    meat: 1,
    cheese: 0.25,
    salad: 0.75,
    bacon: 1.5
  };

  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0
    },
    price: 2,
  };

  addIngredientHandler = (type) => {
    this.setState((prevState) => {
      const ingredients = { ...prevState.ingredients };
      let { price } = prevState;

      ingredients[type]++;
      price += this.ingredientsPrices[type];

      return { ingredients, price };
    });
  };

  removeIngredientHandler = (type) => {
    this.setState((prevState) => {
      const ingredients = { ...prevState.ingredients };

      if (ingredients[type] === 0) {
        return null;
      }

      let { price } = prevState;

      ingredients[type]--;
      price -= this.ingredientsPrices[type];

      return { ingredients, price };
    });
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };

    for (const key of Object.keys(disabledIngredients)) {
      disabledIngredients[key] = disabledIngredients[key] === 0;
    }

    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <div>Total price is: {this.state.price}$</div>
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledIngredients={disabledIngredients}
        />
      </>
    );
  }
}

export default BurgerBuilder;
