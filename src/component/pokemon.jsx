import React from "react";
import "./style/pokemon.css";

const Pokemon = () => {
  return (
    <div className="pokemon">

      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Ditto" />

      <div className="pokemon-label">
        <span>Ditto</span>
        <span>Normal</span>
      </div>

    </div>
  );
};

export default Pokemon;
