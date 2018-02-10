import React from 'react'
import AntCard from './AntCard.js';
import generateAntWinLikelihoodCalculator from "../helpers/calculator";

 class AntsList extends React.Component {
   state = {
     ants: [],
     loading: false
   }

   componentDidMount() {
     this.setState({
       ants: this.props.ants.map(ant => ({
        ...ant,
        likelihood: null,
        status: 'not yet run'
       }))
     })
   }

   setLoading = (input) => {
     this.setState({
        loading: input
     })
   }

   handleCalculate = (event) => {
     this.setLoading(true)
     let antName = event.target.value
     this.getLikelihood(antName)
   }

  getLikelihood = (antName) => {
    let ants = this.state.ants
    let ant = ants.filter(a => a.name === antName)
    let newAnt = ant[0]
    generateAntWinLikelihoodCalculator()(res => {
      let updatedAnt = { ...newAnt, likelihood: (res * 100).toFixed(2) }
      this.reRenderAnt(updatedAnt)
    })
  }

  sortAnts = (ants) => {
    return ants.sort((a, b) => b.likelihood - a.likelihood)
  }

  reRenderAnt = (ant) => {
    let ants = this.state.ants
    let index = ants.findIndex(a => a.name === ant.name)
    let updatedAnts = [...ants.slice(0, index), ant, ...ants.slice(index + 1)]
    console.log(updatedAnts)
    let sorted = this.sortAnts(updatedAnts)
    this.setState({
       ants: sorted,
       loading: false
    })
  };

   render() {

     const mappedAnts = this.state.ants.map(a => {
       return <AntCard key={a.name} name={a.name} length={a.length} color={a.color} weight={a.weight} likelihood={a.likelihood} status={a.status} handleCalculate={this.handleCalculate} />
     })

     return (
       <div>
          { this.state.loading ? 'Loading...' : null }
          { this.state.ants ? mappedAnts : null }
       </div>
     )
   }
 }

 export default AntsList
