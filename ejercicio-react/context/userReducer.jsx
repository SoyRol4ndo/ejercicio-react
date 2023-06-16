import { LEER_INPUT } from "../../types";



export default (state, action) => {
  switch (action.type) {
    case LEER_INPUT:
      return {
        ...state,
        username: action.payload
      };

    default:
      state;
  }
};