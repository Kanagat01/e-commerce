import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import * as routes from "~/shared/routes";

const HomePage = lazy(() => import("./home"));

export const Routing = () => {
  return (
    <Routes>
      <Route path={routes.HOME_ROUTE} element={<HomePage />} />
      <Route path="*" element={<Navigate to={routes.HOME_ROUTE} replace />} />
    </Routes>
  );
};
