import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
  const { ingredients } = props;

  let transformedIngredients = [];
  for (const key in ingredients) {
    for (let i = 0; i < ingredients[key]; i++) {
      transformedIngredients.push(
        <BurgerIngredient key={key + i} type={key} />
      );
    }
  }

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
