import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = ({
  addIngredient,
  removeIngredient,
  disabledLessBtn,
  purchasable,
  price
}) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          type={ctrl.type}
          addIngredient={() => addIngredient(ctrl.type)}
          removeIngredient={() => removeIngredient(ctrl.type)}
          disabledLessBtn={disabledLessBtn[ctrl.type]}
        />
      ))}
      <button className={classes.OrderButton} disabled={!purchasable}>
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
