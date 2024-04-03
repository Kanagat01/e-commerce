import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "~/app/providers/withAuthContext";
import { LOGIN_ROUTE } from "~/shared/routes";

export const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={LOGIN_ROUTE} state={{ from: location }} replace />
  );
};
