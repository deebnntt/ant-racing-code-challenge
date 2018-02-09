import React from 'react'

const Button = (props) => {
  return <button type="button" className="calculate-button" onClick={props.handleCalculate} value={props.name}>Calculate Chances of Win</button>
};

export default Button
