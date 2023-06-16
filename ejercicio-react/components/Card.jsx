import React, { useContext } from 'react';
import userContext from '../context/userContext';

const Card = () => {
  // Obtener el context de Usuario
  const usuarioContext = useContext(userContext);
  const { datosrepositorio } = usuarioContext;

  return (

    <ul>
      {datosrepositorio.map(datos => (
        <li
          key={datos.id}
        >
          <h4>{datos.name}</h4>
          <p >{datos.description}</p>
        </li>
      ))}
    </ul>

  );
};

export default Card;