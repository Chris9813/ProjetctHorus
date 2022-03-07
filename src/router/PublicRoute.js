import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = ({ children }) => {
  const { aud } = useSelector((state) => state.auth);

  return aud ? <Navigate to="/home" /> : children;
};
