import { useUnit } from "effector-react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { $auth } from "~/app/providers/withAuthContext";
import { LOGIN_ROUTE } from "~/shared/routes";

export const PrivateRoute = () => {
  // const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  return useUnit($auth) ? (
    <Outlet />
  ) : (
    <Navigate to={LOGIN_ROUTE} state={{ from: location }} replace />
  );
};
