import React, { useReducer } from 'react';
import userContext from './userContext';
import userReducer from './userReducer';
import axios from 'axios';
import { LEER_INPUT } from "../../types";


const UserState = props => {
  const initialState = {
    username: '',
    datosusuario: {},
    datosrepositorio: []
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Funciones
  // Leer nombre de usuario del input
  const leerInput = username => {
    dispatch({
      type: LEER_INPUT,
      payload: username
    });
  };

  // Consular la API para datos del usuario 
  const consultarAPI = async (usuario) => {
    const url = `https://api.github.com/users/${usuario}`;

    try {
      const response = await axios.get(url);
      const userData = response.data;

      // Extraer la informacion de la API
      const datos = {
        foto: userData.avatar_url,
        username: userData.login,
        bibliografia: userData.bio,
        seguidores: userData.followers,
        repospublic: userData.public_repos
      };

      // Llamado a la funcion para extraer repositorios


      // Pasar los datos del usuario al state


    } catch (error) {
      console.error(error);
    }
  };


  return (
    <userContext.Provider
      value={{
        username: state.username,
        datosusuario: state.datosusuario,
        datosrepositorio: state.datosrepositorio,
        leerInput,
        consultarAPI,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;