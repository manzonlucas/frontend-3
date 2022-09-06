import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Guauguaus from "./components/Guauguaus";
import Miaumiaus from "./components/Miaumiaus";

function App() {
        return (
          <>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Header />}></Route>
                <Route path="home" element={<Home />}></Route>
                <Route path="guauguaus" element={<Guauguaus />}></Route>
                <Route path="miaumiaus" element={<Miaumiaus />}></Route>
              </Routes>
            </BrowserRouter>
          </>
        );
      };

export default App;
