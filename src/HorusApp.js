import React, { useEffect } from "react";
import { MsalProvider } from "@azure/msal-react";

import { Approuter } from "./router/Approuter";
import { useSelector } from "react-redux";

/**
 * Most applications will need to conditionally render certain components based on whether a user is signed in or not.
 * msal-react provides 2 easy ways to do this. AuthenticatedTemplate and UnauthenticatedTemplate components will
 * only render their children if a user is authenticated or unauthenticated, respectively. For more, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */

export const HorusApp = ({ msalInstance, msalInstance2bc }) => {
  const { usuarioExterno } = useSelector((state) => state.auth);

  const instance = () => {
    return usuarioExterno === false ? msalInstance : msalInstance2bc;
  };

  useEffect(() => {
    instance();
  }, [usuarioExterno]);

  console.log(instance());

  return (
    <MsalProvider instance={instance()}>
      <Approuter />
    </MsalProvider>
  );
};
