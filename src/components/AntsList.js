import React from 'react'
import AntCard from './AntCard.js';
import generateAntWinLikelihoodCalculator from "../helpers/calculator";

 class AntsList extends React.Component {
   state = {
     ants: []
   };

   componentDidMount() {
     this.setState({
       ants: this.props.ants.map(ant => ({
        ...ant,
        likelihood: 'Not Calculated',
        status: 'not yet run'
       }))
     })
   }

  handleCalculate = (event) => {
    let antName = event.target.value
    let ant = this.state.ants.filter(a => {a.name === antName})
    let index = this.state.ants.findIndex(a => {a.name === antName})
    generateAntWinLikelihoodCalculator()(res => {
      const updatedAnt = {...ant, likelihood: res }
    })
    console.log(ant, index)
  }

   render() {

     const mappedAnts = this.state.ants.map(a => {
       return <AntCard key={a.name} name={a.name} length={a.length} color={a.color} weight={a.weight} likelihood={a.likelihood} status={a.status} handleCalculate={this.handleCalculate} />
     })

     return (
       <div>
          {mappedAnts}
       </div>
     )
   }
 }

 export default AntsList
