import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import iconoUsuario from "../../img/iconoUsuario.png";
import { useMsal } from "@azure/msal-react";
import { useSelector } from "react-redux";
import Moment from "react-moment";

export const NavBar = () => {
  const { instance } = useMsal();
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.auth);

  const ultAcceso = localStorage.getItem("UltimoAcceso");
  const vencToken = localStorage.getItem("VencimientoToken");

  const handleClick = () => {
    dispatch(logout());
    localStorage.clear();
    sessionStorage.clear();
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
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
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="d-flex justify-content-end">
                      <div className="btn-text-nav-home">
                        <b className="btn-text-up">{name}</b>
                        <br />
                        <div style={{ fontSize: "0.9rem" }}>{email}</div>
                      </div>
                      <div>
                        <div className="v-line"></div>
                        <img
                          src={iconoUsuario}
                          className="mx-3 iconoUsuario-Home"
                        />
                      </div>
                    </div>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-home"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <div className="dropdown-item dropdown-item-home mt-1">
                        <b>Última vez inicio de sesión</b>
                      </div>
                      <div className="dropdown-item dropdown-item-home">
                        <Moment format="YYYY/MM/DD hh:mm">{ultAcceso}</Moment>
                      </div>
                    </li>
                    <li>
                      <div class="dropdown-item dropdown-item-home">
                        <b>Contraseña valida para:</b>
                        <div class="dropdown-item dropdown-item-home mb-2">
                          <Moment format="YYYY/MM/DD hh:mm">{vencToken}</Moment>
                        </div>
                      </div>
                      <li>
                        <li className="divider">
                          <hr class="dropdown-divider mt-0" />
                        </li>

                        <a
                          class="dropdown-item dropdown-item-home"
                          onClick={handleClick}
                        >
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
