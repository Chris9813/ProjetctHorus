import React from "react";
import ReactDOM from "react-dom";
import { msalConfig } from "./auth/authConfig";
import { HorusApp } from "./HorusApp";
import { PublicClientApplication } from "@azure/msal-browser";
import "./styles.css";
import { msalConfig2bc } from "./auth/authConfig2bc";
import { store } from "./store/store";
import { Provider } from "react-redux";

export const msalInstance = new PublicClientApplication(msalConfig);
export const msalInstance2bc = new PublicClientApplication(msalConfig2bc);

ReactDOM.render(
  <Provider store={store}>
    <HorusApp msalInstance={msalInstance} msalInstance2bc={msalInstance2bc} />
  </Provider>,
  document.getElementById("root")
);
