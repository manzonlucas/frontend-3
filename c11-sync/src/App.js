import Rejuvenecedor from "./components/Rejuvenecedor";
import Swal from 'sweetalert2';

function App() {

  function Validar(event) {
    event.preventDefault();
    const nombre = event.target.nombre.value;
    const edad = parseInt(event.target.edad.value);

    if (nombre.length > 0 && edad > 0) {
      let nuevaEdad = edad - 10;
      console.log(typeof nuevaEdad);
      Swal.fire('Datos validados ' + nombre + ', has rejuvenecido 10 años, tu nueva edad es: ' + nuevaEdad)
    } else {
      Swal.fire('Datos erroneos')
    }

    event.target.nombre.value = '';
    event.target.edad.value = '';
  }

  return (
    <Rejuvenecedor validador={Validar} />
  );
}

export default App;
