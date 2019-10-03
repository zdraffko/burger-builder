import * as actionTypes from "./actions";

const ingredientsPrices = {
  meat: 1,
  cheese: 0.25,
  salad: 0.75,
  bacon: 1.5
};

const initialState = {
  ingredients: {
    meat: 0,
    cheese: 0,
    salad: 0,
    bacon: 0
  },
  price: 2
};

const rootReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: {
      const ingredient = action.payload.ingredientType;
      return {
        ingredients: {
          ...prevState.ingredients,
          [ingredient]: prevState.ingredients[ingredient] + 1,
        },
        price: prevState.price + ingredientsPrices[ingredient],
      };
    }

    case actionTypes.REMOVE_INGREDIENT: {
      const ingredient = action.payload.ingredientType;
      return {
        ingredients: {
          ...prevState.ingredients,
          [ingredient]: prevState.ingredients[ingredient] === 0 ? 0 : prevState.ingredients[ingredient] - 1,
        },
        price: prevState.price - ingredientsPrices[ingredient]
      };
    }

    case actionTypes.RESET_INGREDIENTS:
      return initialState;

    default:
      return prevState;
  }
};

export default rootReducer;
