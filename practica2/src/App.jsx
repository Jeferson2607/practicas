import { useState } from "react"
import Contador from "./components/Contador"
import Controles from "./components/Controles"
import Props from "./components/Props"
import InputTexto from "./components/InputTexto"
import Formulario from "./components/formulario"
import MensajeCondicional from "./components/MensajeCondicional"
import Sesion from "./components/Sesion"
import MensajeConsola from "./components/MensajeConsola"
import ContadorEfect from "./components/ContadorEfect"
import ConsumoApi from "./components/ConsumoApi"


function App() {

  const [contador, setContador] = useState(0)
  const nombre = "Jeferson"
  const apellidos = "Alcazar"
  return (
    <>
      <Props nombre={nombre} apellidos={apellidos} />
      <hr />
      <Contador contador={contador} />
      <Controles contador={contador} setContador={setContador} />
      <hr />
      <InputTexto />
      <hr />
      <Formulario />
      <hr />
      <MensajeCondicional />
      <hr />
      <Sesion />
      <hr />
      <MensajeConsola />
      <hr />
      <ContadorEfect />
      <hr />
      <ConsumoApi />
    </>
  )
}

export default App
