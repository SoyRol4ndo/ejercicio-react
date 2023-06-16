import React, { useReducer } from 'react';
import userContext from './userContext';
import userReducer from './userReducer';
import axios from 'axios';
import {
  LEER_INPUT,
  GUARDAR_DATOS_USUARIO,
  GUARDAR_REPOSITORIOS_USUARIO,
  LIMPIAR_DATOS
} from "../src/types";


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
      obtenerRepositorios(url);

      // Pasar los datos del usuario al state
      guardarDatosUsuario(datos);

    } catch (error) {
      console.error(error);
    }
  };

  // Consultar API para repositorios 
  const obtenerRepositorios = async (url) => {
    const repoUrl = `${url}/repos?sort=created`;
    try {
      const response = await axios.get(repoUrl);
      const repositorios = response.data;

      // Pasar los datos de los repositorios al state
      guardarDatosRepositorio(repositorios);

    } catch (error) {
      console.log(error);
    }
  };

  // Guardar datos del usuario en el state
  const guardarDatosUsuario = (datos) => {
    dispatch({
      type: GUARDAR_DATOS_USUARIO,
      payload: datos
    });
  };

  // Guardar datos de repositorios
  const guardarDatosRepositorio = (repositorios) => {
    dispatch({
      type: GUARDAR_REPOSITORIOS_USUARIO,
      payload: repositorios
    });
  };

  // Limpiar los resultados
  const limpiarResultados = () => {
    console.log('limpiando');
    dispatch({
      type: LIMPIAR_DATOS
    });
  };


  return (
    <userContext.Provider
      value={{
        username: state.username,
        datosusuario: state.datosusuario,
        datosrepositorio: state.datosrepositorio,
        leerInput,
        consultarAPI,
        limpiarResultados
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;