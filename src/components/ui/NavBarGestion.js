import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import { logout } from "../../actions/auth";
import logoHorus from "../../img/logoHorus.png";
import logoUsuario_gestion from "../../img/logoUsuario_gestion.jpg";
import { useMsal } from "@azure/msal-react";

export const NavBarGestion = () => {
  const { instance } = useMsal();
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const ultAcceso = localStorage.getItem("UltimoAcceso");
  const vencToken = localStorage.getItem("VencimientoToken");

  const handleClick = () => {
    localStorage.clear();
    sessionStorage.clear();
    dispatch(logout());
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };

  return (
    <>
      <nav className="navbar navbar-grid navbar-expand-lg navbar-light ">
        <div className="container-fluid ">
          <div className="logoHorus navbar-brand">
            <Link className="logo " to="/home">
              <img src={logoHorus} className="logo img-fluid mx-auto d-block" />
            </Link>
          </div>

          <div className="search-controller" style={{ marginLeft: "16rem" }}>
            <button className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <input
              className="prompt"
              type="text"
              placeholder="Búsqueda"
              aria-label="Search"
              typeicon="search"
            />
          </div>

          <div className=" btn-collapse">
            <div className="navbar-collapse" id="navbarScroll">
              <ul className=" navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <div className="nav-item dropdown">
                  <a
                    className="nav-link name-navBar-Grid dropdown"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "white" }}
                  >
                    <div className="d-flex justify-content-end">
                      <div
                        className="btn-text-nav-home"
                        style={{ marginTop: "1.3em" }}
                      >
                        {name}
                        <br />
                      </div>
                      <div>
                        <img src={logoUsuario_gestion} className="icono " />
                      </div>
                    </div>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-home"
                    aria-labelledby="offcanvasNavbarDropdown"
                    style={{ marginInline: "4rem", marginTop: "-0.8rem" }}
                  >
                    <li>
                      <div
                        className="dropdown-item dropdown-item-home mt-1"
                        href="#"
                      >
                        <b>Última vez inicio de sesión</b>
                      </div>
                      <div
                        className="dropdown-item dropdown-item-home"
                        href="#"
                      >
                        <Moment format="YYYY/MM/DD hh:mm">{ultAcceso}</Moment>
                      </div>
                    </li>
                    <div>
                      <div
                        className="dropdown-item dropdown-item-home"
                        href="#"
                      >
                        <b>Contraseña valida para:</b>
                        <div
                          className="dropdown-item dropdown-item-home mb-2"
                          href="#"
                        >
                          <Moment format="YYYY/MM/DD hh:mm">{vencToken}</Moment>
                        </div>
                      </div>
                      <div>
                        <li className="divider">
                          <hr className="dropdown-divider mt-0" />
                        </li>
                        <a
                          className="dropdown-item dropdown-item-home"
                          href="#"
                          onClick={handleClick}
                        >
                          <i className="fa-solid fa-arrow-right-from-bracket fa-1x mx-2"></i>
                          <b>SALIDA</b>
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
