import * as React from "react";
import { Navigate } from "react-router";
import { isLoggedIn } from "./utils/main-utils";
import { Outlet } from "react-router-dom";

export type ProtectedRouteProps = {
  outlet: React.ReactElement;
};

export default function ProtectedRoute() {
  const isAuthenticated = isLoggedIn();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to={{
        pathname: `/login`,
      }}
    />
  );
}
