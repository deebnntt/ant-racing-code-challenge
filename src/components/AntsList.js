import React from 'react'
import AntCard from './AntCard.js';

const AntsList = ({ data: {loading, error, ants }}) => {
   if (loading) {
     return <p>Loading ...</p>;
   }
   if (error) {
     return <p>{error.message}</p>;
   }
   return <ul>
     { ants.map( a => <AntCard name={a.name} length={a.length} color={a.color} weight={a.weight} /> ) }
   </ul>;
 };

 export default AntsList
