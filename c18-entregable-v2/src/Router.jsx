import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout';
import Home from './components/Home';

export default function Router() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/tienda' element={<App />}></Route>
          </Route>


          {/* <Route path='*' element={<h1>ERROR 404</h1>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}