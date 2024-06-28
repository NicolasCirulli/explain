import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Ejercicio1 } from "./pages/Ejercicio1/Ejercicio1";
import { Ejercicio2 } from "./pages/Ejercicio2/Ejercicio2";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/ejercicio1">Ejercicio 1</Link>
        <Link to="/ejercicio2">Ejercicio 2</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<h2> inicio </h2>} />
          <Route path="/ejercicio1" element={<Ejercicio1 />} />
          <Route path="/ejercicio2" element={<Ejercicio2 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
