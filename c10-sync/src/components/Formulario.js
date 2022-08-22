export default function Formulario(props) {
  return (
    <form onSubmit={props.crearTurno} action="">
      <label htmlFor="name">Ingrese su nombre: </label>
      <input type="text" name='nombre' />
      <br />
      <br />
      <label htmlFor="lastName">Ingrese su apellido: </label>
      <input type="text" name='apellido' />
      <br />
      <br />
      <input type="submit" value='Enviar' />
    </form>
  )
}