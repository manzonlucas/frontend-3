import React from 'react'

// OK El componente Cabera no tiene componentes hijos.
// OK ESTADO: Cabecera no tiene estado.
// OK MÉTODOS: Cabecera no tiene métodos.
// OK PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// OK Maqueta de Cabecera:
// OK   h1
// OK   p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera(props) {

  return (
    <header>
      <h1></h1>

      <p>
        <span>
          {props.cantidad}
        </span>
      </p>
    </header>
  )
}
