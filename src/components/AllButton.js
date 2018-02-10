import React from 'react'

const AllButton = (props) => {
  return <button type="button" className="calculate-button" onClick={props.handleCalculateAll} value={props.name}>Calculate All Odds</button>
};

export default AllButton
