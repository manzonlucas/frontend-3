// DIGITAL HOUSE CERTIFIED TECH DEVELOPER 
// FRONTEND III 29/08/2022 
// ENTREGABLE DE LUCAS MANZÓN

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
          Cantidad total de items en el carrito: {props.stock}
        </span>
      </p>
    </header>
  )
}
