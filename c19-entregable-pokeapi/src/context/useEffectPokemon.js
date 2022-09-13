import React from "react";
import axios from "axios";
import { useState } from "react";
import pokemonContext from "./pokemonContext";

const UseEffectPokemon = (props) => {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const [pokedex, setPokedex] = useState("");
  const [pokedexList, setPokedexList] = useState()

  const getPokemonById = (pokemon) =>{
    axios.get(`${url+pokemon}`).then((response) => {
      setPokedex(response.data);
    });}
  const getPokemons = () =>{
    axios.get(`${url}`).then((response) => {
      setPokedexList(response.data);
    });}

  return (<pokemonContext.Provider value={{pokedex, pokedexList, getPokemonById,getPokemons}}>
        {props.children}
  </pokemonContext.Provider>)
};


export default UseEffectPokemon;