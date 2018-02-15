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

   /* event handler for calculate button
      will show loading
   */
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

   //event handler for calculate button
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

   //sets status to show that ant odds are being calculated
   setAntStatus = (ant) => {
     let updatedAnt = { ...ant, likelihood: 'calculating...' }
     this.reRenderAnt(updatedAnt)
   }

   //calls on generateAntWinLikelihoodCalculator helper & then sets ant state to new odds
  getLikelihood = (ant) => {
    generateAntWinLikelihoodCalculator()(res => {
      let updatedAnt = { ...ant, likelihood: (res * 100).toFixed(2) }
      this.reRenderAnt(updatedAnt)
    })
  }

  sortAnts = (ants) => {
    return ants.sort((a, b) => b.likelihood - a.likelihood)
  }

  //updates ant state with new ant details
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
          <div className="header-column">NAME</div>
          <div className="header-column">LENGTH</div>
          <div className="header-column">COLOR</div>
          <div className="header-column">WEIGHT</div>
          <div className="header-column">ODDS</div>
          <div className="header-column"></div>
        </div>
          { this.state.ants ? mappedAnts : null }
       </div>
     )
   }
 }

 export default AntsList
