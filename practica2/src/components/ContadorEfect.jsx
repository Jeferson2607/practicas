import React, {useState,useEffect} from 'react'

const ContadorEfect = () => {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log(`El contador ahora es ${contador}`);
  }, [contador])

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 2)}>Incrementar</button>
    </div>
  )
}

export default ContadorEfect
