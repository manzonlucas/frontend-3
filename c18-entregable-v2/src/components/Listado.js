// DIGITAL HOUSE CERTIFIED TECH DEVELOPER 
// FRONTEND III 29/08/2022 
// ENTREGABLE DE LUCAS MANZÓN

import React from 'react';
import data from './data.json';
import Item from './Item';

// OK Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// OK El componente Listado es el padre de:
// OK - varios Item
// OK ESTADO: Listado no necesita manejar un estado.
// OK MÉTODOS: Listado no requiere de métodos.
// OK PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado(props) {

  return (
    <div className='container'>
      {data.map((item, index) => {
        return (
          <Item
            key={index}
            itemData={item}
            comprarItem={props.comprarItem}
          />
        )
      })}
    </div>
  )
}
