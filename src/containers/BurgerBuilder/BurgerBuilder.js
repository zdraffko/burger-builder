import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Button from "../../components/UI/Button/Button";

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

  createOrderHandler = () => {
    this.setState({ isOrdered: true });
  };

  cancelOrderHandler = () => {
    this.setState({ isOrdered: false });
  };

  submitOrderHandler = () => {
    this.props.history.push("/checkout");
  }

  render() {
    const disabledIngredients = { ...this.state.ingredients };

    for (const key of Object.keys(disabledIngredients)) {
      disabledIngredients[key] = disabledIngredients[key] === 0;
    }

    return (
      <>
        <Modal isShown={this.state.isOrdered} closeModal={this.cancelOrderHandler}>
          <OrderSummary ingredients={this.state.ingredients} price={this.state.price} />
          <Button buttonType="Success" click={this.submitOrderHandler}>CONTINUE</Button>
          <Button buttonType="Fail" click={this.cancelOrderHandler}>CANCEL</Button>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.price}
          isPurchasable={this.state.isPurchasable}
          order={this.createOrderHandler}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledIngredients={disabledIngredients}
        />
      </>
    );
  }
}

export default BurgerBuilder;
