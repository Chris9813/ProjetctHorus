import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (aud, name, preferred_username, oid, tid, token) => {
  return async (dispatch) => {
    const resp = await fetchConToken(
      "AutenticarUsuario",
      {
        oid,
        tid,
        name,
        name,
        preferred_username,
        direccionip: "181.54.0.221",
        token,
      },
      "POST"
    );
    const body = await resp.json();

    const respValid = await fetchConToken(
      "ValidarUsuario",
      {
        oid,
      },
      "POST"
    );
    const bodyValid = await respValid.json();
    console.log(bodyValid.Resultado);
    const { UltimoAcceso, VencimientoToken } = bodyValid.DatosUsuario;
    if (bodyValid.Resultado === 1 && body.Resultado === 1) {
      localStorage.setItem("UltimoAcceso", UltimoAcceso);
      localStorage.setItem("VencimientoToken", VencimientoToken);
    }
  };
};

export const startCheking = (name, email, aud) => {
  return (dispatch) => {
    dispatch(login(name, email, aud));
  };
};

export const checkingFinish = () => ({
  type: types.authCheckingFinish,
});

export const login = (name, email, aud) => ({
  type: types.authStartLogin,
  payload: {
    name: name,
    email: email,
    aud: aud,
  },
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(clearData());
    dispatch(logout());
  };
};

export const logout = () => ({ type: types.authLogout });
const clearData = () => ({ type: types.gestionLogout });

export const change2bc = (value) => ({
  type: types.authChangeUsuario2bc,
  payload: value,
});
