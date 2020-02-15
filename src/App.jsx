import React, { useEffect, useState } from "react";
import "./styles.css";
import Pokemon from "./component/pokemon";
import axios from "axios";
import { API_URL } from "./constant/api.js";
import Search from "./component/search";

const getPokemon = axios(API_URL + "pokemon/");

const App = () => {
  const [pokedata, setPokedata] = useState(null);
  useEffect(() => {
    getPokemon
      .then(response => setPokedata(response.data.results))
      .catch(err => console.log(err));
  });
  return (
    <>
      <Search />
      <div className="App">
        {pokedata === null ? (
          <p>Loading.... </p>
        ) : (
          pokedata.map((data, i) => <Pokemon key={i} data={data} />)
        )}
      </div>
    </>
  );
};

export default App;
