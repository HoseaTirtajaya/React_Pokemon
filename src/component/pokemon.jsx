import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style/pokemon.css";

const Pokemon = ({ data }) => {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    axios
      .get(data.url)
      .then(response => setDetail(response.data))
      .catch(err => console.log(err));
  });

  return (
    <div className="pokemon">
      {detail === null || detail.sprites.front_default === null ? (
        <p>Image NOt Found</p>
      ) : (
        <img src={detail.sprites.front_default} alt="Ditto" />
      )}

      <div className="pokemon-label">
        <span>{data.name || "Undefined"}</span>
        {detail === null || detail.types[0].type.name === null ? (
          <p>Image NOt Found</p>
        ) : (
          <span>{detail.types[0].type.name}</span>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
