import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { verifyToken } from "~/shared/api";

export type AuthContextType = {
  isAuthenticated: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setAuth: () => {},
});

export const withAuthContext = (component: () => ReactNode) => () => {
  const [isAuthenticated, setAuth] = useState<boolean>(false);

  useEffect(() => {
    const accessToken =
      sessionStorage.getItem("access_token") ||
      localStorage.getItem("access_token");
    const refreshToken =
      sessionStorage.getItem("refresh_token") ||
      localStorage.getItem("refresh_token");

    Promise.all([verifyToken(accessToken), verifyToken(refreshToken)]).then(
      ([isAccessTokenValid, isRefreshTokenValid]) => {
        setAuth(isAccessTokenValid || isRefreshTokenValid);
      }
    );
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {component()}
    </AuthContext.Provider>
  );
};
