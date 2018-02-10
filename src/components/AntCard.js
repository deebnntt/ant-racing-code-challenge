import React from 'react'
import Button from './Button.js'

 class AntCard extends React.Component {

   render() {

     return (
       <div className="ant-card">
         <div className="card-column"><strong>{this.props.name}</strong></div>
         <div className="card-column">{this.props.length}</div>
         <div className="card-column">{this.props.color}</div>
         <div className="card-column">{this.props.weight}</div>
         <div className="card-column">{this.props.likelihood ? this.props.likelihood : "Not yet calculated"}</div>
         <div className="card-column"><Button handleCalculate={this.props.handleCalculate} name={this.props.name}/></div>
       </div>
     )
   }
 }

 export default AntCard
