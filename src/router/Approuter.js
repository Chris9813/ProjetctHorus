import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { startCheking, startLogin } from "../actions/auth";
import { LoginScreen } from "../components/Login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const Approuter = () => {
  const dispatch = useDispatch();
  const { checking, uid, lEmail, lPassword } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(startCheking(123, 123));
  }, [dispatch]);

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
