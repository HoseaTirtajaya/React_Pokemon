import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./constant/api";
import "./styles.css";
import Pokemon from "./component/pokemon";
import Search from "./component/search";

const getPokemon = axios.get(API_URL + "pokemon/");

export default function App() {
  const [pokedata, setPokedata] = useState(null);
  useEffect(() => {
    getPokemon
      .then(response => setPokedata(response.data.results))
      .catch(function(err) {
        console.log(err);
      });
  });
  return (
    <>
      <Search />
      <div className="App">
        {pokedata === null ? (
          <p>Loading . . .</p>
        ) : (
          pokedata.map((data, i) => <Pokemon key={i} data={data} />)
        )}
      </div>
    </>
  );
}
