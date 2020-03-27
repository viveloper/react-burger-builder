import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 0.7,
  meat: 1.3
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  addIngredientHandler = type => {
    this.setState(prevState => {
      return {
        ingredients: {
          ...prevState.ingredients,
          [type]: prevState.ingredients[type] + 1
        },
        totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
      };
    });
  };

  removeIngredientHandler = type => {
    if (this.state.ingredients[type] <= 0) return;
    this.setState(prevState => {
      return {
        ingredients: {
          ...prevState.ingredients,
          [type]: prevState.ingredients[type] - 1
        },
        totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
      };
    });
  };

  render() {
    const disabledInfo = {};
    for (const key in this.state.ingredients) {
      disabledInfo[key] = this.state.ingredients[key] <= 0;
    }
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
        />
      </>
    );
  }
}

export default BurgerBuilder;
