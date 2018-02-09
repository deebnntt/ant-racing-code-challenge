import React from 'react'
import AntsList from './AntsList.js';

const AntsContainer = ({ data: {loading, error, ants }}) => {
   if (loading) {
     return <p>Loading ...</p>;
   }
   if (error) {
     return <p>{error.message}</p>;
   }
   return <div>
     <AntsList ants={ants} />
   </div>;
 };

 export default AntsContainer
