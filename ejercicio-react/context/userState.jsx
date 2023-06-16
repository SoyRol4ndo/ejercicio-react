import React, { useReducer } from 'react';
import userContext from './userContext';
import userReducer from './userReducer';



const UserState = props => {
  const initialState = {
    username: '',
    datosusuario: {},
    datosrepositorio: []
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Funciones



  return (
    <userContext.Provider
      value={{

      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;