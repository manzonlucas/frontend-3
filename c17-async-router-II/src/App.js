import Home from "./components/Home";
import Main from "./components/Main";
import About from "./components/About";
import Faq from "./components/Faq";
import Blog from "./components/Blog";
import Vlog from "./components/Vlog";

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import NotFount from "./components/NotFound";

export default function App() {
  return (
    <BrowserRouter>

      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/main'>Main</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
        <li><Link to='/asd'>Broken link - 404 error test</Link></li>

      </ul>

      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="main" element={<Main />}>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="vlog" element={<Vlog />}></Route>
        </Route>
        <Route path="about" element={<About />}></Route>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="*" element={<NotFount />}></Route>
      </Routes >
    </BrowserRouter >
  );
}

