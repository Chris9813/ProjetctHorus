import axios from "axios";
import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const res = await axios.get("https://localhost:44307/api/US_LOG");

    console.log(res.data);
  };
};

export const startRegister = (name, email, password) => {
  return async (dispatch) => {
    const resp = await fetchSinToken(
      "auth/new",
      { name, email, password },
      "POST"
    );
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      Swal.fire("error", body.msg, "error");
    }
  };
};

export const startCheking = (uid, name) => {
  return async (dispatch) => {
    /*
    const resp = await fetchConToken("auth/renew", {}, "GET");
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      dispatch(checkingFinish());
    }
    */
    localStorage.setItem("uid", uid);
    localStorage.setItem("uid-init-date", new Date().getTime());
    dispatch(
      login({
        uid: uid,
        name: name,
      })
    );
  };
};

export const checkingFinish = () => ({
  type: types.authCheckingFinish,
});

export const login = (user) => ({
  type: types.authStartLogin,
  payload: user,
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
