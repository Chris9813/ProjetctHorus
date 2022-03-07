import { useMsal } from "@azure/msal-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { startCheking } from "../actions/auth";
import { LoginScreen } from "../components/Login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const Approuter = () => {
  const { accounts } = useMsal();
  const dispatch = useDispatch();
  const { checking } = useSelector((state) => state.auth);
  const name = accounts[0] ? accounts[0].name : undefined;
  const email = accounts[0] ? accounts[0].username : undefined;
  const aud = accounts[0] ? accounts[0].idTokenClaims.aud : undefined;

  useEffect(() => {
    dispatch(startCheking(name, email, aud));
  }, [accounts, name, email, aud]);

  if (checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <div className="container-fluid-login height-bg d-flex justify-content-center align-items-center">
                <LoginScreen />
              </div>
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
