// import {
//   createContext,
//   Dispatch,
//   ReactNode,
//   SetStateAction,
//   useEffect,
//   useState,
// } from "react";
// import { fetchUserProfileFx } from "~/entities/User";
// import { getValidToken } from "~/shared/api";

// export type TAuthContext = {
//   isAuthenticated: boolean;
//   setAuth: Dispatch<SetStateAction<boolean>>;
// };

// export const AuthContext = createContext<TAuthContext>({
//   isAuthenticated: false,
//   setAuth: () => {},
// });

// export const withAuthContext = (component: () => ReactNode) => () => {
//   const [isAuthenticated, setAuth] = useState<boolean>(false);

//   useEffect(() => {
//     const checkToken = async () => {
//       const token = await getValidToken();
//       if (token) {
//         fetchUserProfileFx();
//         setAuth(true);
//       }
//     };
//     checkToken();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
//       {component()}
//     </AuthContext.Provider>
//   );
// };

import { createEffect, createStore } from "effector";
import { useUnit } from "effector-react";
import { ReactNode, useEffect } from "react";
import { fetchUserProfileFx } from "~/entities/User";
import { getValidToken } from "~/shared/api";

export const checkTokenFx = createEffect(async () => {
  const token = await getValidToken();
  if (token) {
    await fetchUserProfileFx();
    return true;
  }
  return false;
});

export const $auth = createStore(false).on(
  checkTokenFx.doneData,
  (_, isAuthenticated) => isAuthenticated
);

export const withAuthContext = (component: () => ReactNode) => () => {
  useEffect(() => {
    checkTokenFx();
  }, []);

  return useUnit($auth) ? component() : null;
};
