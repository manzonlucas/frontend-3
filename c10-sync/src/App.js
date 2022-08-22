import Formulario from "./components/Formulario";
import { useState } from "react";
import ListaTurnos from "./components/ListaTurnos";

function App() {

  const [datos, setDatos] = useState([]);
  function crearTurno(event) {
    event.preventDefault();
    const nombre = event.target.nombre.value;
    const apellido = event.target.apellido.value;
    const paciente = {
      nombre: nombre,
      apellido: apellido
    }

    setDatos([paciente, ...datos]);

    event.target.nombre.value = '';
    event.target.apellido.value = '';
  }

  return (
    <div className="App">

      <Formulario crearTurno={crearTurno} />
      <ListaTurnos turnos={datos} />

    </div>
  );
}

export default App;