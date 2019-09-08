import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    isPurchasable: false,
    isOrdered: false,
  };

  checkIsBurgerPurchasable = (ingredients) => {
    const ingredientSum = Object.values(ingredients)
      .reduce((totalSum, currentValue) => totalSum + currentValue, 0);
    return ingredientSum > 0;
  };

  addIngredientHandler = (type) => {
    this.setState((prevState) => {
      const ingredients = { ...prevState.ingredients };
      let { price } = prevState;

      ingredients[type]++;
      price += this.ingredientsPrices[type];
      const isPurchasable = this.checkIsBurgerPurchasable(ingredients);

      return { ingredients, price, isPurchasable };
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
      const isPurchasable = this.checkIsBurgerPurchasable(ingredients);

      return { ingredients, price, isPurchasable };
    });
  };

  orderHandler = () => {
    this.setState({ isOrdered: true });
  };

  orderCancelHandler = () => {
    this.setState({ isOrdered: false });
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };

    for (const key of Object.keys(disabledIngredients)) {
      disabledIngredients[key] = disabledIngredients[key] === 0;
    }

    return (
      <>
        <Modal isShown={this.state.isOrdered} closeModal={this.orderCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.price}
          isPurchasable={this.state.isPurchasable}
          order={this.orderHandler}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledIngredients={disabledIngredients}
        />
      </>
    );
  }
}

export default BurgerBuilder;
