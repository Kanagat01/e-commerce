import { ReactElement, lazy, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import * as urls from "~/shared/routes";
import { PrivateRoute } from "./PrivateRoute";
import { fetchUserProfileFx } from "~/entities/User";

const HomePage = lazy(() => import("./home"));
const Cart = lazy(() => import("./cart"));
const Products = lazy(() => import("./products"));
const ProductDetails = lazy(() => import("./product_details"));
const Login = lazy(() => import("./login"));
const Favorites = lazy(() => import("./favorites"));

export const Routing = () => {
  useEffect(() => {
    fetchUserProfileFx();
  });
  const routes: Array<[string, ReactElement]> = [
    [urls.HOME_ROUTE, <HomePage />],
    [urls.CART_ROUTE, <Cart />],
    [urls.PRODUCTS_ROUTE, <Products />],
    [urls.PRODUCT_DETAILS_ROUTE, <ProductDetails />],
    [urls.LOGIN_ROUTE, <Login formType="login" />],
    [urls.REGISTER_ROUTE, <Login formType="register" />],
  ];
  const privateRoutes: Array<[string, ReactElement]> = [
    [urls.FAVORITES_ROUTE, <Favorites />],
  ];
  return (
    <Routes>
      {routes.map(([route, component], idx) => (
        <Route key={idx} path={route} element={component} />
      ))}
      <Route element={<PrivateRoute />}>
        {privateRoutes.map(([route, component], idx) => (
          <Route key={idx} path={route} element={component} />
        ))}
      </Route>
      <Route path="*" element={<Navigate to={urls.HOME_ROUTE} replace />} />
    </Routes>
  );
};
