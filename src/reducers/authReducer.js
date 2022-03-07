import { types } from "../types/types";

const initialState = {
  checking: true,
  usuarioExterno: false,
  //uid: null,
  //name: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogout:
      return {
        checking: false,
      };

    case types.authStartLogin:
      return {
        ...state,
        checking: false,
        ...action.payload,
      };

    case types.authCheckingFinish:
      return {
        ...state,
        checking: false,
      };

    case types.authChangeUsuario2bc:
      return {
        ...state,
        usuarioExterno: action.payload,
      };

    case types.authsetDatos:
      return {
        ...state,
        vencToken: action.payload.VencimientoToken,
        ultLogin: action.payload.UltimoAcceso,
      };

    default:
      return state;
  }
};
