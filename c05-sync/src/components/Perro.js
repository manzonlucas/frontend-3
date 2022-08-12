import React from "react";

export default function Perro(props) {
  return (
    <>
      <h2>Nombre: {props.nombre}</h2>
        <li>Edad: {props.edad}</li>
        <li>Sexo: {props.sexo}</li>
        <li>Raza: {props.raza}</li>
        <li>Tamanio: {props.tamanio}</li>
    </>
  )
}