import React from "react";


const tripulantes = [
  { nombre: "Mr. Poindibags", esImpostor: true },
  { nombre: "Bombom", esImpostor: false },
  { nombre: "Tito", esImpostor: false },
  { nombre: "X-Ray", esImpostor: false },
  { nombre: "Fixfox", esImpostor: false },
];

const App = () => {

  let tripulacion = tripulantes.map((tripulante, index) => {
    return (
      <li key={index}>El tripulante {tripulante.nombre} {tripulante.esImpostor ? <b>es el impostor</b> : 'no es el impostor'}</li>
    )
  })

  return (
    <ul>
      {tripulacion}
    </ul>
  )
}

export default App;