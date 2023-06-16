import {
  LEER_INPUT,
  GUARDAR_DATOS_USUARIO,
  GUARDAR_REPOSITORIOS_USUARIO,
} from "../../types";



export default (state, action) => {
  switch (action.type) {
    case LEER_INPUT:
      return {
        ...state,
        username: action.payload
      };
    case GUARDAR_DATOS_USUARIO:
      return {
        ...state,
        datosusuario: action.payload
      };
    case GUARDAR_REPOSITORIOS_USUARIO:
      return {
        ...state,
        datosrepositorio: action.payload
      };

    default:
      state;
  }
};