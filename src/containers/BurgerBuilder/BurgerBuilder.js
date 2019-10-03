import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../../store/actions";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Button from "../../components/UI/Button/Button";

class BurgerBuilder extends Component {
  state = { isOrdered: false };

  checkIsBurgerPurchasable = (ingredients) => {
    const ingredientSum = Object.values(ingredients)
      .reduce((totalSum, currentValue) => totalSum + currentValue, 0);
    return ingredientSum > 0;
  };

  // addIngredientHandler = (type) => {
  //   this.setState((prevState) => {
  //     const ingredients = { ...prevState.ingredients };
  //     let { price } = prevState;

  //     ingredients[type] += 1;
  //     price += this.ingredientsPrices[type];
  //     const isPurchasable = this.checkIsBurgerPurchasable(ingredients);

  //     return { ingredients, price, isPurchasable };
  //   });
  // };

  // removeIngredientHandler = (type) => {
  //   this.setState((prevState) => {
  //     const ingredients = { ...prevState.ingredients };

  //     if (ingredients[type] === 0) {
  //       return null;
  //     }

  //     let { price } = prevState;

  //     ingredients[type]--;
  //     price -= this.ingredientsPrices[type];
  //     const isPurchasable = this.checkIsBurgerPurchasable(ingredients);

  //     return { ingredients, price, isPurchasable };
  //   });
  // };

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
    const disabledIngredients = { ...this.props.ingredients };

    for (const key of Object.keys(disabledIngredients)) {
      disabledIngredients[key] = disabledIngredients[key] === 0;
    }

    return (
      <>
        <Modal isShown={this.state.isOrdered} closeModal={this.cancelOrderHandler}>
          <OrderSummary ingredients={this.props.ingredients} price={this.props.price} />
          <Button buttonType="Success" click={this.submitOrderHandler}>CONTINUE</Button>
          <Button buttonType="Fail" click={this.cancelOrderHandler}>CANCEL</Button>
        </Modal>
        <Burger ingredients={this.props.ingredients} />
        <BuildControls
          price={this.props.price}
          isPurchasable={this.checkIsBurgerPurchasable(this.props.ingredients)}
          order={this.createOrderHandler}
          addIngredient={this.props.addIngredient}
          removeIngredient={this.props.removeIngredient}
          disabledIngredients={disabledIngredients}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ingredients: state.ingredients,
  price: state.price,
});

const mapDispatchToProps = (dispatch) => ({
  addIngredient: (type) => dispatch({ type: actionTypes.ADD_INGREDIENT, payload: { ingredientType: type } }),
  removeIngredient: (type) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, payload: { ingredientType: type } })
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
