import React from "react";
import { GridView } from "./GridView";
import { PanelVistaArbol } from "./PanelVistaArbol";
import { ToolBarGridView } from "./ToolBarGridView";
import SideBar from "../ui/SideBar";
import { Link } from "react-router-dom";
import logoHorus from "./logoHorus.png";
import { NavBarGestion } from "../ui/NavBarGestion";

export const GestionDirectorioScreen = () => {
  return (
    <>
      <NavBarGestion />
      <div className="sidebar">
        {/*<PanelVistaArbol />*/}
        <SideBar />
      </div>

      <section className="p-4 my-container">
        <div className="container-toolbar">
          <ToolBarGridView />
        </div>
        <div className="gridView-general ">
          <GridView />
        </div>
      </section>
    </>
  );
};
