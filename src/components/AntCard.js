import React from 'react'
import Button from './Button.js'

 class AntCard extends React.Component {

   render() {

     return (
       <div className="ant-card">
         <h2>{this.props.name}</h2>
         <p>Length: {this.props.length}</p>
         <p>Color: {this.props.color}</p>
         <p>Weight: {this.props.weight}</p>
         <Button />
       </div>
     )
   }
 }

 export default AntCard
