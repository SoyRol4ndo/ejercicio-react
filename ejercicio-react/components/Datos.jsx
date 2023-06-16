import React, { useContext } from 'react';
import userContext from '../context/userContext';

const Datos = () => {

  // Obtener el context de Usuario
  const usuarioContext = useContext(userContext);
  const { datosusuario, datosrepositorio, limpiarResultados } = usuarioContext;

  // Destructiring de las propiedades del usuario
  const { foto, username, bibliografia, seguidores, repospublic } = datosusuario;

  return (
    <div>
      {(datosrepositorio.length === 0) ? (
        <p>Todavia no se carga</p>
      ) : (
        <div >
          <div>
            <img
              src={foto}
              alt={`Foto de perfil de ${username}`} />
            <div>
              <h2>{username}</h2>
              <p>Biografía: {bibliografia}</p>
            </div>

          </div>
          <div>
            <div>
              <p>Seguidores: {seguidores}</p>
              <p>Repositorios públicos: {repospublic}</p>
            </div>
            <div>
              <h3>Repositorios recientes</h3>
            </div>
          </div>
          <input
            type='button'
            value='Volver'
            onClick={limpiarResultados}
          />
        </div>
      )}
    </div>
  );
};

export default Datos;