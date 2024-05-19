import { createEvent, createStore } from "effector";

export const setAuth = createEvent<boolean>();
export const $auth = createStore(false).on(
  setAuth,
  (_, isAuthenticated) => isAuthenticated
);
