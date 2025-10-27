import React ,{useState} from 'react'



const MensajeCondicional = () => {

 const [mensaje, setMensaje] = useState('')

  return (
    <div>
      <input 
      type="text" 
      placeholder='Escribe un mensaje'
      value={mensaje}
      onChange={(evento)=>setMensaje(evento.target.value)}
    />

      {mensaje ? <p>Tu mensaje es: {mensaje}</p> : <p>No hay ningun mensaje por mostrar</p>}

      {mensaje && <button onClick={()=>{alert(`Mensaje Enviado. Mensaje: ${mensaje}`)}}>Enviar</button>}

    </div>
  )
}

export default MensajeCondicional
