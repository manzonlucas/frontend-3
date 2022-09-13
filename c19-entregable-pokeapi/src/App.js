import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Info from './components/Info';
import ListAll from './components/ListAll';
import Search from './components/Search';
import UseEffectPokemon from './context/useEffectPokemon';

export default function App() {
  return (
    <>
    <UseEffectPokemon>
      <BrowserRouter>
        <Link to={'/'}>Info/Home</Link>
        <Link to={'/search'}>Search</Link>
        <Link to={'/listall'}>List all</Link>

        <Routes>
          <Route index path='/' element={<Info />}>Info</Route>
          <Route path='/search' element={<Search />}>Search</Route>
          <Route path='/listall' element={<ListAll />}>List all</Route>
        </Routes>
      </BrowserRouter>
    </UseEffectPokemon>
    </>
  );
}
