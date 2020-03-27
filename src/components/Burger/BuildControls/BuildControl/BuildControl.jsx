import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = ({
  label,
  addIngredient,
  removeIngredient,
  disabledLessBtn
}) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button
        className={classes.Less}
        onClick={removeIngredient}
        disabled={disabledLessBtn}
      >
        Less
      </button>
      <button className={classes.More} onClick={addIngredient}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
