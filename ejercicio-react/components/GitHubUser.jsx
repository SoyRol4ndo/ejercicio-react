import React, { useContext } from 'react';
import Form from './Form';
import Datos from './Datos';
import userContext from '../context/userContext';

const GitHubUser = () => {
  // Obtener el context de Usuario
  const usuarioContext = useContext(userContext);
  const { username } = usuarioContext;

  return (
    <>
      {username === '' ?
        (<Form />) :
        (<Datos />)
      }
    </>
  );
};

export default GitHubUser;