import React from "react";
import { useDispatch } from "react-redux";
import { login, startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: "",
    lPassword: "",
  });

  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(lEmail, lPassword, 1232));
  };

  return (
    <div className="bg-opacity h-w-block radius text-center">
      <h1 className="mt-5 title">HORUS+</h1>
      <div className="mx-3">
        <form className="mt-3 mx-4 width-form" action="#">
          <div className="input-group mb-3 h-w-input">
            <label
              for="user"
              className="input-group-text border-form color-span px-3"
              id="basic-addon1"
            >
              <i className="fas fa-user text-light"></i>
            </label>
            <input
              type="text"
              className="form-control border-form color-input"
              aria-label="Username"
              aria-describedby="basic-addon1"
              id="user"
              name="lEmail"
              value={lEmail}
              onChange={handleLoginInputChange}
            />
          </div>
          <div className="input-group mb-3 h-w-input">
            <label
              for="password"
              className="input-group-text border-form color-span px-3"
              id="basic-addon1"
            >
              <i className="fas fa-lock text-light"></i>
            </label>
            <input
              type="password"
              className="form-control border-form color-input"
              aria-label="Username"
              aria-describedby="basic-addon1"
              id="password"
              name="lPassword"
              value={lPassword}
              onChange={handleLoginInputChange}
            />
          </div>
          <div className="ms-1 mb-3 form-check d-flex">
            <input
              type="checkbox"
              className="form-check-input me-2 checkbox"
              id="exampleCheck1"
            />
            <label className="form-check-label check-label" for="exampleCheck1">
              Recuérdame
            </label>
          </div>
          <button type="submit" className="btn btn-white">
            INICIAR SESIÓN
          </button>
        </form>
      </div>
    </div>
  );
};
