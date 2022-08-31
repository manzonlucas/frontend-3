// DIGITAL HOUSE CERTIFIED TECH DEVELOPER 
// FRONTEND III 29/08/2022 
// ENTREGABLE DE LUCAS MANZÓN

import { useState } from "react";

// OK El componente Item no tiene componentes hijos.
// OK ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// OK MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// OK PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// OK Maqueta de Item:
// OK h3
// OK p
// OK h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
// OK button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item(props) {

  const [stock, setStock] = useState(props.itemData.stock);

  function restarStock(event) {
    setStock(stock - 1);
    if (stock === 1) {
      event.target.disabled = true;
    }
  }

  function handleClick(event) {
    props.comprarItem();
    restarStock(event);
  }

  return (
    <div className='producto'>
      <h3>{props.itemData.producto.nombre}</h3>
      <p>{props.itemData.producto.descripcion}</p>
      <h5>
        Stock: {stock > 0 ? <b>{stock}</b> : <span>AGOTADO</span>}
      </h5>
      <button onClick={handleClick}>
        {stock > 0 ? 'Comprar' : 'Sin stock'}
      </button>
    </div>
  )
}
