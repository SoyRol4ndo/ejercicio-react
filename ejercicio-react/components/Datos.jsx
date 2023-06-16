import React, { useContext } from 'react';
import userContext from '../context/userContext';
import Card from './Card';

const Datos = () => {

  // Obtener el context de Usuario
  const usuarioContext = useContext(userContext);
  const { datosusuario, datosrepositorio, limpiarResultados } = usuarioContext;

  // Destructiring de las propiedades del usuario
  const { foto, username, bibliografia, seguidores, repospublic } = datosusuario;

  return (
    <>
      {(datosrepositorio.length === 0) ? (
        <div class="spinner"></div>
      ) : (
        <div className='container'>
          <div className='container-logo'>
            <img
              className='datos-img'
              src={foto}
              alt={`Foto de perfil de ${username}`}
            />
            <h2>{username}</h2>
          </div>

          <div>
            <p>Biografía: <span>{bibliografia}</span> </p>
          </div>

          <div>
            <p className=''>Seguidores: <span>{seguidores}</span></p>
            <p>Repositorios públicos:<span> {repospublic}</span></p>
          </div>

          <div>
            <p>Repositorios recientes:</p>
            <Card />
          </div>
          <div className='btn-atras'>
            <button
              type='button'
              className='btn'
              onClick={limpiarResultados}
            >Volver</button>
          </div>

        </div>
      )}
    </>
  );
};

export default Datos;