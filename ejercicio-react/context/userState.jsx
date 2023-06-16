import React, { useReducer } from 'react';
import userContext from './userContext';
import userReducer from './userReducer';
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


  return (
    <userContext.Provider
      value={{
        username: state.username,
        datosusuario: state.datosusuario,
        datosrepositorio: state.datosrepositorio,
        leerInput,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;