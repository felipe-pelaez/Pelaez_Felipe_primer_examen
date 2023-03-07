import React, { useState } from 'react'
import Card from './Components/Card'
import './Form.css'

const Form = () => {
    const [user, setUser] = useState({
      nombre : "",
      peliculaFavorita: ""
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length >= 3 && user.nombre.charAt(0) != " " && user.peliculaFavorita.length >= 6) {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
            setShow(false)
        }

    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <label>Nombre</label>
            <input type="text" value={user.nombre} placeholder="Nombre" onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Pelicula favorita</label>
            <input type="text" value={user.obraSocial} placeholder="Pelicula favorita" onChange={(e) => setUser({...user, peliculaFavorita: e.target.value})}/>
            <button>Enviar</button>
            <div class="error">{err && 'Verifica que la información sea correcta'}</div>
        </form>
        {show  && <Card nombre={user.nombre} pelicula={user.peliculaFavorita}/>}
        {/* {show  ? <Card nombre={user.nombre} medico={user.medico}/> : null} */}
       
    </div>
  )
}

export default Form