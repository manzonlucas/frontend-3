import axios from 'axios';
import Pokemon from './Pokemon';
import { useState, useEffect,useContext } from "react";
import pokemonContext from "../context/pokemonContext";

export default function ListAll() {
  // const url = 'https://pokeapi.co/api/v2/pokemon/'

  // const [pokedex, setPokedex] = useState('');

  // useEffect(() => {
  //   axios.get(`${url}`)
  //     .then(response => {
  //       setPokedex(response.data)
  //       // console.log(response.data);
  //       // setInput('');
  //     })
  // }, [])



  const pokemonSearch = useContext(pokemonContext);
  const {pokedexList,getPokemons} = pokemonSearch;

  useEffect(() => {
    getPokemons()
    
  }, [])

  return (
    <>
      <h1>List all</h1>
      {pokedexList ?  pokedexList.results.map((pokemon, index) =>{ return <Pokemon data={pokemon} key={index}/>}) : <h2>aqui</h2>}
    </>
  )
}