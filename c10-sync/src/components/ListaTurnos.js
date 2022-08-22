export default function ListaTurnos(props) {
  return (
    <ul>
      {props.turnos.map((elemento, index) => {
        return (
          <li key={index}>
            El turno {index} es de {elemento.nombre} {elemento.apellido}.
          </li>
        )
      })}
    </ul>
  )
}