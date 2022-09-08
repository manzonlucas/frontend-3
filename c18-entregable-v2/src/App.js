// DIGITAL HOUSE CERTIFIED TECH DEVELOPER 
// FRONTEND III 29/08/2022 
// ENTREGABLE DE LUCAS MANZÓN

import { useState } from 'react';
import Cabecera from './components/Cabecera.js'
import Listado from './components/Listado.js'

// El componente App es el padre de:
// - Cabecera
// - Listado
// OK ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// OK MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// OK PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {

  const [stock, setStock] = useState(0);

  function comprarItem() {
    setStock(stock  + 1);
  }

  return (
    <div className="App">
      <Cabecera stock={stock} />
      <Listado comprarItem={comprarItem}/>
    </div>
  );
}

export default App;