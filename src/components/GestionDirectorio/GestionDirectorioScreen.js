import React, { useState } from "react";
import { GridView } from "./GridView";
import { ToolBarGridView } from "./ToolBarGridView";
import SideBar from "../ui/SideBar";
import { NavBarGestion } from "../ui/NavBarGestion";
import { startLoadContainers } from "../../actions/events";
import { startLoadContainersGrid } from "../../actions/events";
import { useDispatch } from "react-redux";

export const GestionDirectorioScreen = () => {
  const dispatch = useDispatch();
  
  const oid = localStorage.getItem("oid");
  console.log(oid)
  dispatch(startLoadContainers(oid));
  dispatch(startLoadContainersGrid());
  
  return (
    <div className="gestion-screen">
      <NavBarGestion />
      <div className="sidebar">
        <SideBar />
      </div>

      <section className="p-4 my-container">
        <div className="container-toolbar">
          <ToolBarGridView />
        </div>
        <div className="container gridView-general ">
          <GridView />
        </div>
      </section>
    </div>
  );
};
