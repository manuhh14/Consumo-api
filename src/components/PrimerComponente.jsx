import React, { useEffect, useState } from 'react'

export const PrimerComponente = () => {
    const [contador, setContador] = useState(0);
    const [color, setColor] = useState(false);

    useEffect(() => {
        console.log('El componente se ha montado');
    }, [color]);

    const contar = () => {
        setContador(contador + 1);
        setColor(!color);
    }
  return (
    <div>
        <h1>Hola </h1>
        <h2>Contador de  Raact con Hooks</h2>
        <h4>El numero del contador es : {contador} </h4>
        <p>El semaforo esta en coloor :  {color ? "rojo" : "verde"} </p>


        <button type='button' onClick={contar}>Sumar contador</button>
    </div>
  )
}
