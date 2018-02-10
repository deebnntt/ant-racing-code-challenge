import React from 'react'

const Button = (props) => {
  return <button type="button" className="calculate-button" onClick={props.handleCalculate} value={props.name}>Calculate Odds</button>
};

export default Button
