import React from "react";
import { GridView } from "./GridView";
import { ToolBarGridView } from "./ToolBarGridView";
import SideBar from "../ui/SideBar";
import { NavBarGestion } from "../ui/NavBarGestion";
import { startLoadContainers, startLoadFiles } from "../../actions/events";
import { useDispatch } from "react-redux";
import { fetchConToken } from "../../helpers/fetch";

export const GestionDirectorioScreen = () => {
  const dispatch = useDispatch();
  const oid = localStorage.getItem("oid");
  dispatch(startLoadContainers(oid));

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
