import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import logoHorus from "../../img/logoHorus.png";
import iconoUsuario from "../../img/iconoUsuario.png";

export const NavBarGestion = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
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

          <div className="search-controller">
            <button className="search-btn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>

            <input
              className="prompt"
              type="text"
              placeholder="Busqueda"
              aria-label="Search"
              typeIcon="search"
            />
          </div>

          <div className=" btn-collapse">
            <div className="navbar-collapse" id="navbarScroll">
              <ul className=" navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link name-navBar-Grid dropdown"
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
                        Jesse
                        <br />
                      </div>
                      <div>
                        <img src={iconoUsuario} className="icono " />
                      </div>
                    </div>
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="offcanvasNavbarDropdown"
                    style={{ marginInline: "-8rem", marginTop: "-0.8rem" }}
                  >
                    <li>
                      <div class="dropdown-item mt-1" href="#">
                        <b>Última vez inicio de sesión</b>
                      </div>
                      <div class="dropdown-item" href="#">
                        2022/02/22 08:30 am
                      </div>
                    </li>
                    <li>
                      <div class="dropdown-item" href="#">
                        <b>Contraseña valida para:</b>
                        <div class="dropdown-item mb-2" href="#">
                          2022/02/22
                        </div>
                      </div>
                      <li>
                        <li className="divider">
                          <hr class="dropdown-divider mt-0" />
                        </li>
                        <a class="dropdown-item" href="#" onClick={handleClick}>
                          <i class="fa-solid fa-arrow-right-from-bracket fa-1x mx-2"></i>
                          <b>SALIDA</b>
                        </a>
                      </li>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
