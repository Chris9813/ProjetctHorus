import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import "../css/NavBar.css"
import logoHorus from "./img/logoHorus.png"
import iconoUsuario from "./img/iconoUsuario.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass}from '@fortawesome/free-solid-svg-icons'
import { Button } from "@material-ui/core";
export const NavBar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid ">

          <div className="logoHorus navbar-brand">
          <Link className="logo " to="/home">
            <img src={logoHorus} className="logo img-fluid mx-auto d-block"/>
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
                    class="nav-link dropdown"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{color:'white'}}
                  >
                     Jesse 
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Ultima conexión: 17/02/2022
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Fecha de expiracion de contraseña: 17/03/22
                      </a>
                      <li>
                        <a class="dropdown-item" href="#" onClick={handleClick}>
                          Cerrar sesion
                        </a>
                        
                      </li>
                    </li>
                  </ul>
                </li>
              
              </ul>
              <div className="d-flex iconoUsuario">
                  <img src={iconoUsuario} className="icono "/>
                  </div>
            </div>
          </div>
         
        </div>
      </nav>
    </>
  );
};
