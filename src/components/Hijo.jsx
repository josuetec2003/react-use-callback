import React, { useEffect } from 'react';

export default function Hijo({ funcion }) {
  useEffect(() => {
    console.log('Hijo renderizado');
  }, [funcion]);

  return (
    <div>
      <h2>Componente Hijo</h2>
      <p>Valor del padre por 2: {funcion()}</p>
    </div>
  );
}
