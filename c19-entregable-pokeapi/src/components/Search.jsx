import axios from 'axios';
import { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

export default function Search() {

  const [pokemon, setPokemon] = useState(false);
  const [input, setInput] = useState('5');
  const [pokemonSearch, setPokemonSearch] = useState('');

  const url = 'https://pokeapi.co/api/v2/pokemon/'

  function handleSubmit(e) {
    e.preventDefault();
    setPokemonSearch(input);
  }

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  useEffect(() => {
    axios.get(`${url + input}`)
      .then(response => {
        setPokemon(response.data)
        setInput('');
      })
  }, [pokemonSearch])

  return (
    <>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

      {pokemon ? <Pokemon data={pokemon} /> : null}
    </>
  )
}