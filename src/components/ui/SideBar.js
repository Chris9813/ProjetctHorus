import React, { useState } from "react";
import { PanelVistaArbol } from "../GestionDirectorio/PanelVistaArbol";
import PanelVistaFavoritos from "../GestionDirectorio/PanelVistaFavoritos";

const SideBar = () => {
  const [desplieguehorus, setDespliegueHorus] = useState(false);
  const [despliegueFavoritos, setDespliegueFavoritos] = useState(false);

  return (
    <div style={{ backgroundColor: "#efeeed" }}>
      <aside>
        <h1 className="h1-sidebar">
          File<span>Station</span>
        </h1>
        <div style={{ width: "18rem" }} className="bg-file-station">
          <div className="mt-5">
            <div
              className={
                desplieguehorus
                  ? "d-flex flex-row dropdown w-75 file-horus"
                  : "d-flex flex-row dropdown w-75"
              }
            >
              <button
                type="button"
                className="btn w-100 d-flex dropdown-toggle"
                onClick={() => setDespliegueHorus(!desplieguehorus)}
              >
                {desplieguehorus ? (
                  <>
                    <ion-icon
                      name="folder-outline"
                      className="ms-4 bg-primary fs-5 icon fas"
                    ></ion-icon>
                    <h2 className="mt-1 ms-3 text-white">Horus+</h2>
                  </>
                ) : (
                  <div className="mx-4">
                    <div className="d-flex flex-row">
                      <i className="icon far fa-folder"></i>
                      <h2 className="mt-1 ">Horus+</h2>
                    </div>
                  </div>
                )}
              </button>
            </div>
            {desplieguehorus && (
              <ul className="ms-5 ul-horus w-75">
                <PanelVistaArbol />
              </ul>
            )}
            <hr />

            <div
              className={
                despliegueFavoritos
                  ? "d-flex flex-row dropdown w-75 file-horus"
                  : "d-flex flex-row dropdown w-75"
              }
            >
              <button
                type="button"
                className="btn w-100 d-flex dropdown-toggle"
                onClick={() => setDespliegueFavoritos(!despliegueFavoritos)}
              >
                {despliegueFavoritos ? (
                  <>
                    <ion-icon
                      name="star-outline"
                      className="star ms-3 bg-primary fs-4 icon fas"
                    ></ion-icon>
                    <h2 className="mt-1 ms-3 text-white">Favoritos</h2>
                  </>
                ) : (
                  <div className="mx-4">
                    <div className="d-flex flex-row">
                      <i className="icon fas fa-star me-1"></i>
                      <h2 className="mt-1 ">Favoritos</h2>
                    </div>
                  </div>
                )}
              </button>
            </div>
            {despliegueFavoritos && (
              <ul className="ms-5 ul-horus w-75">
                <PanelVistaFavoritos />
              </ul>
            )}
            <hr />

            <div className="d-flex flex-row ms-5">
              <i className="icon fas fa-user-friends"></i>
              <h2 className="mt-1">Compartido</h2>
            </div>
            <hr />

            <div className="d-flex flex-row ms-5">
              <i className="icon fas fa-trash-alt me-1"></i>
              <h2 className="mt-1">Papelera Reciclaje</h2>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
