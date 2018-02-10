import React from 'react'
import AntCard from './AntCard.js'
import generateAntWinLikelihoodCalculator from '../helpers/calculator'
import AllButton from './AllButton'

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
       }))
     })
   }

   setLoading = (input) => {
     this.setState({
        loading: input
     })
   }

   findAntByName = (antName) => {
     let ants = this.state.ants
     let ant = ants.filter(a => a.name === antName)
     return ant[0]
   }

   handleCalculateAll = () => {
     this.setLoading(true)
     setTimeout(() => {
       this.updateAll()
    }, 1000);
   }

   updateAll = () => {
     this.state.ants.forEach(a => {
       let newAnt = this.findAntByName(a.name)
       this.updateAnt(newAnt)
     })
   }

   handleCalculate = (event) => {
     this.setLoading(true)
     let antName = event.target.value
     let newAnt = this.findAntByName(antName)
     this.updateAnt(newAnt)
   }

   updateAnt = (ant) => {
     this.setAntStatus(ant)
     this.getLikelihood(ant)
   }

   setAntStatus = (ant) => {
     let updatedAnt = { ...ant, likelihood: 'calculating...' }
     this.reRenderAnt(updatedAnt)
   }

  getLikelihood = (ant) => {
    generateAntWinLikelihoodCalculator()(res => {
      let updatedAnt = { ...ant, likelihood: (res * 100).toFixed(2) }
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
         <div className="button-div">
          <AllButton handleCalculateAll={this.handleCalculateAll}/>
          <br />
          { this.state.loading ? 'Loading...' : null }
         </div>
        <div className="ant-card-header">
          <div className="card-column">Name</div>
          <div className="card-column">Length</div>
          <div className="card-column">Color</div>
          <div className="card-column">Weight</div>
          <div className="card-column">Odds</div>
          <div className="card-column"></div>
        </div>
          { this.state.ants ? mappedAnts : null }
       </div>
     )
   }
 }

 export default AntsList
