import React from "react";
import { Routes, Route } from "react-router-dom";
import { GestionDirectorioScreen } from "../components/GestionDirectorio/GestionDirectorioScreen";
import { HomeScreen } from "../components/Home/HomeScreen";
import { NavBar } from "../components/ui/NavBar";

export const DashboardRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="home" element={<HomeScreen />} />
          <Route path="gestion" element={<GestionDirectorioScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </>
  );
};
