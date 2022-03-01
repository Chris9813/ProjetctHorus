import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

export const NavBar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand"></div>
          <div className="d-flex justify-content-end btn-collapse">
            <div className="navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="btn-nav-home nav-link dropdown-toggle"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="d-flex justify-content-end">
                      <div className="btn-text-nav-home">
                        <b className="btn-text-up">Jesse White</b>
                        <br />
                        <div style={{ fontSize: "0.9rem" }}>
                          jesse@horus.com
                        </div>
                      </div>
                      <div>
                        <div class="v-line"></div>
                        <i class="fa-regular fa-circle-user fa-4x mx-3"></i>
                      </div>
                    </div>
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="offcanvasNavbarDropdown"
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
