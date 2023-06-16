import {
  LEER_INPUT,
  GUARDAR_DATOS_USUARIO,
  GUARDAR_REPOSITORIOS_USUARIO,
  LIMPIAR_DATOS
} from "../src/types";


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
    case LIMPIAR_DATOS:
      return {
        ...state,
        username: '',
        datosusuario: {},
        datosrepositorio: []
      };

    default:
      state;
  }
};