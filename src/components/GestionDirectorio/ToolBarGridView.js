import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { modalCrearOpen } from "../../actions/events";
import { ModalCrear } from "./Modal";

export const ToolBarGridView = () => {
  const { position } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const handleCrear = () => {
    dispatch(modalCrearOpen());
  };

  return (
    <>
      {position.length > 0 && (
        <div className="toolBarGridView">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xs-12 col-sm-12  col-md-12 col-lg-7">
                <div className="row ">
                  <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
                    <div className="search-controller">
                      <button className="search-btn">
                        <i className="fa-solid fa-folder-tree"></i>
                      </button>
                      <a
                        className="nav-link dropdown-toggle"
                        id="offcanvasNavbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ color: "#9c9c9f" }}
                      >
                        Ordenar
                      </a>
                      <div className="divider-tolbar"></div>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
                    <div className="search-controller">
                      <button className="search-btn">
                        <i className="fa-solid fa-folder-plus"></i>
                      </button>
                      <a
                        className="nav-link dropdown-toggle"
                        id="offcanvasNavbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ color: "#9c9c9f" }}
                        onClick={handleCrear}
                      >
                        Nuevo
                      </a>

                      <div className="divider-tolbar"></div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
                    <div className="search-controller">
                      <button className="search-btn">
                        <i className="fa-solid fa-copy"></i>
                      </button>
                      <a
                        className="nav-link dropdown-toggle"
                        id="offcanvasNavbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ color: "#9c9c9f" }}
                      >
                        Mover a
                      </a>
                      <div className="divider-tolbar"></div>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
                    <div className="search-controller">
                      <button className="search-btn">
                        <i className="fa-solid fa-arrow-up-long"></i>
                      </button>
                      <a
                        className="nav-link dropdown-toggle"
                        id="offcanvasNavbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ color: "#9c9c9f" }}
                      >
                        Cargar
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-toolbar"
                        aria-labelledby="offcanvasNavbarDropdown"
                      >
                        <li style={{ marginBottom: "-12px" }}>
                          <div
                            className="dropdown-item"
                            href="#"
                            style={{ marginInline: "15px" }}
                          >
                            <b>
                              <label
                                htmlFor="file-upload-carpeta"
                                className="custom-file-upload"
                              >
                                Carpeta
                              </label>
                              <input id="file-upload-carpeta" type="file" />
                            </b>
                          </div>
                        </li>
                        <hr style={{ marginInline: "px" }} />
                        <li style={{ marginTop: "-16px" }}>
                          <div
                            className="dropdown-item"
                            style={{ marginInline: "15px" }}
                          >
                            <b>
                              <label
                                htmlFor="file-upload-archivo"
                                className="custom-file-upload"
                              >
                                Archivo
                              </label>
                              <input id="file-upload-archivo" type="file" />
                            </b>
                          </div>
                        </li>
                      </ul>
                      <div className="divider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ModalCrear />
    </>
  );
};
