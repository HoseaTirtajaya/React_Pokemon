import React from "react";

const Pokemon = props => {
  return (
    <div className="pokemon">
      <img src={props.sprite} />
      <p>{props.name}</p>
    </div>
  );
};

export default Pokemon;
