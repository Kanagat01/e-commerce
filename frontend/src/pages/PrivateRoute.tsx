import { useUnit } from "effector-react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { $auth } from "~/features/auth";
import { LOGIN_ROUTE } from "~/shared/routes";

export const PrivateRoute = () => {
  const location = useLocation();

  return useUnit($auth) ? (
    <Outlet />
  ) : (
    <Navigate to={LOGIN_ROUTE} state={{ from: location }} replace />
  );
};
