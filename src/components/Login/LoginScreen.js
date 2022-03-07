import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { change2bc, login, startCheking } from "../../actions/auth";

import { useMsal } from "@azure/msal-react";

import { loginRequest } from "../../auth/authConfig";

export const LoginScreen = () => {
  const { instance, accounts } = useMsal();
  const dispatch = useDispatch();
  const name = accounts[0] ? accounts[0].name : undefined;
  const email = accounts[0] ? accounts[0].username : undefined;
  const aud = accounts[0] ? accounts[0].idTokenClaims.aud : undefined;

  const handleLogin = (e) => {
    e.preventDefault();
    instance.loginRedirect(loginRequest);
    dispatch(login(name, email, aud));
  };

  useEffect(() => {
    dispatch(startCheking(name, email, aud));
  }, [accounts, name, email, aud]);

  return (
    <div className="bg-opacity h-w-block radius text-center">
      <h1 className="mt-5 title">HORUS+</h1>
      <div className="mx-3">
        <form className="mt-3 mx-4 width-form" action="#">
          <div>
            <p className="p-input-usuario">
              PRIMERO SELECCIONA UN TIPO DE USUARIO
            </p>
            <div className="usuario-cenit-radio">
              <span style={{ marginInline: "0.82rem" }}>Usuario CENIT</span>
              <input
                className="check-Usuario"
                name="checkUsuario"
                type="radio"
                onChange={() => dispatch(change2bc(false))}
              />
            </div>
            <div>
              <span style={{ marginInline: "0.5rem" }}>Usuario Externo</span>
              <input
                className="check-Usuario"
                name="checkUsuario"
                type="radio"
                onChange={() => dispatch(change2bc(true))}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-white" onClick={handleLogin}>
            INICIAR SESIÓN
          </button>
        </form>
      </div>
    </div>
  );
};
