import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map((actor)=>(
    <div key={actor.name}> 
    <h2>Name: {actor.name}</h2>
    
    <p>Movies:</p>
    <ul>
      {actor.movies.map((movie)=>(<li>{movie}</li>))}
    </ul>
  </div>
  ))
  return <div>
    <h1>Actor Page</h1>
    {actorsList}
    </div>;
}

export default Actors;
