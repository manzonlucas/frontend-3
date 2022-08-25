export default function Rejuvenecedor(props) {
  return (
    <form onSubmit={props.validador}>
      <label htmlFor="nombre">Inserte su nombre: </label>
      <input type="text" name='nombre' />
      <br />
      <br />
      <label htmlFor="edad">Inserte su edad: </label>
      <input type="text" name='edad' />
      <br />
      <br />

      <button type='submit'>Ok</button>
    </form>
  )
}