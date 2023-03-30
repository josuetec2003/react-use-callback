import React, { useState, useCallback } from 'react';
import Hijo from './components/Hijo';
import './style.css';

export default function App() {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState('');

  const handleClick = () => setContador(contador + 1);
  const handleChange = (e) => setTexto(e.target.value);

  // useCallback(fn, [dependencias])

  const contadorDoble = useCallback(() => {
    return contador * 2;
  }, [contador]);

  return (
    <div>
      <h1>Componente Padre</h1>
      <div>
        <input
          onChange={handleChange}
          placeholder="Escribe algo aqui"
          type="text"
        />
        &nbsp;
        <button onClick={handleClick}>Incrementar</button> {contador}
        <p>Escrito en input: {texto}</p>
      </div>
      <Hijo funcion={contadorDoble} />
    </div>
  );
}
