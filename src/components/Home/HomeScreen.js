import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { NavBar } from "../ui/NavBar";
import { fetchSinToken } from "../../helpers/fetch";
import axios from "axios";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const handleStation = () => {
    navigate("/gestion");
  };

  const enviarDatos = async () => {
    try {
      const res = await axios.get("https://localhost:44307/api/Huser");
      console.log(res.data);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  /*
  const enviarDatos = async () => {
    try {
      const resp = await fetch("https://localhost:44307/api/Huser");
      console.log(resp);
      const { data } = await resp.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  */
  console.log(enviarDatos());

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
