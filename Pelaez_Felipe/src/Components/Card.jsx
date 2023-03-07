import React from 'react'
import '../Card.css'

const Card = ({nombre, pelicula}) => {

  return (
    <div>
        <h2>Hola{nombre}!</h2>
        <h3>Sabemos que tu pelicula favorita es: {pelicula}</h3>
    </div>
  )
}

export default Card