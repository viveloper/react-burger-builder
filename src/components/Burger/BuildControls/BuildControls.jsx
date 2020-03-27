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
  disabledInfo,
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
          disabledLessBtn={disabledInfo[ctrl.type]}
        />
      ))}
    </div>
  );
};

export default BuildControls;
