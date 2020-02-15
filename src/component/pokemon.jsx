import React, { useEffect, useState } from "react";
import "./style/pokemon.css";
import axios from "axios";

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
        <p>Image Not Found.</p>
      ) : (
        <img src={detail.sprites.front_default} alt="Ditto" />
      )}
      <div className="pokemon-label">
        {data.name || undefined}
        {detail === null || detail.types[0].type.name === null ? (
          <p>Type not Found</p>
        ) : (
          <span>{detail.types[0].type.name}</span>
        )}
      </div>
      {/* <p>{props.name}</p> */}
    </div>
  );
};

export default Pokemon;
