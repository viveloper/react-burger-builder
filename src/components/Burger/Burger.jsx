import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
  const { ingredients } = props;
  const transformedIngredients = Object.keys(ingredients).map(igKey => {
    return Array(ingredients[igKey])
      .fill('')
      .map((_, index) => <BurgerIngredient key={igKey + index} type={igKey} />)
      .reduce((arr, el) => arr.concat(el), []);
  });
  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
