import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { fetchUserProfileFx } from "~/entities/User";
import { getValidToken } from "~/shared/api";

export type TAuthContext = {
  isAuthenticated: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<TAuthContext>({
  isAuthenticated: false,
  setAuth: () => {},
});

export const withAuthContext = (component: () => ReactNode) => () => {
  const [isAuthenticated, setAuth] = useState<boolean>(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await getValidToken();
      if (token) {
        fetchUserProfileFx();
        setAuth(true);
      }
    };
    checkToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {component()}
    </AuthContext.Provider>
  );
};
