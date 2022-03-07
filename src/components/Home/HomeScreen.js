import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { useMsal } from "@azure/msal-react";

import { NavBar } from "../ui/NavBar";
import { startAuth } from "../../helpers/startAuth";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const { accounts } = useMsal();

  const base = accounts[0].homeAccountId;
  console.log(base);
  const handleStation = () => {
    navigate("/gestion");
  };

  const name = accounts[0] ? accounts[0].name : undefined;
  const preferred_username = accounts[0] ? accounts[0].username : undefined;
  const aud = accounts[0] ? accounts[0].idTokenClaims.aud : undefined;
  const oid = accounts[0] ? accounts[0].homeAccountId : undefined;
  const tid = accounts[0] ? accounts[0].idTokenClaims.tid : undefined;
  const token = JSON.parse(
    sessionStorage.getItem(
      `${base}-login.windows.net-accesstoken-e0911462-e85e-4b16-9d8c-70c241126a8a-0da0b1a6-e6bf-434d-ad5b-689c039c77c7-openid profile email--`
    )
  ).secret;

  localStorage.setItem("oid", oid);

  startAuth(aud, name, preferred_username, oid, tid, token);

  return (
    <>
      <NavBar />
      <div className="container home-fondo">
        <div className="row align-items-center justify-content-center center-block minh-100">
          <div className="col-xs-6 col-sm-12  col-md-12 col-lg-12 text-center  ">
            <h1 className="titulo">HORUS+</h1>
          </div>
          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2 mx-1">
            <div className="card text-dark " onClick={handleStation}>
              <div className="card-header text-center ">
                <div style={{ fontSize: "3em", color: "#fed463" }}>
                  <FontAwesomeIcon icon={faFolder} />
                </div>
                <p>FileStation</p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2 mx-1">
            <div className="card text-dark " onClick={handleStation}>
              <div className="card-header text-center ">
                <div style={{ fontSize: "3em", color: "#cbdb52" }}>
                  <FontAwesomeIcon icon={faFolder} />
                </div>
                <p>Usuarios</p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2 mx-1">
            <div className="card text-dark " onClick={handleStation}>
              <div className="card-header text-center ">
                <div style={{ fontSize: "3em", color: "#cbdb52" }}>
                  <FontAwesomeIcon icon={faFolder} />
                </div>
                <p>FileStation</p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2 mx-1">
            <div className="card text-dark " onClick={handleStation}>
              <div className="card-header text-center ">
                <div style={{ fontSize: "3em", color: "#fed463" }}>
                  <FontAwesomeIcon icon={faFolder} />
                </div>
                <p>FileStation</p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2 mx-1">
            <div className="card text-dark " onClick={handleStation}>
              <div className="card-header text-center ">
                <div style={{ fontSize: "3em", color: "#fed463" }}>
                  <FontAwesomeIcon icon={faFolder} />
                </div>
                <p>FileStation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    </>
  );
};
