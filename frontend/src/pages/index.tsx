import { ReactElement, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  CART_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCTS_ROUTE,
  PRODUCT_DETAILS_ROUTE,
  REGISTER_ROUTE,
} from "~/shared/routes";

const HomePage = lazy(() => import("./home"));
const Cart = lazy(() => import("./cart"));
const Products = lazy(() => import("./products"));
const ProductDetails = lazy(() => import("./product_details"));
const Login = lazy(() => import("./login"));
const Register = lazy(() => import("./register"));

export const Routing = () => {
  const routes: Array<[string, ReactElement]> = [
    [HOME_ROUTE, <HomePage />],
    [CART_ROUTE, <Cart />],
    [PRODUCTS_ROUTE, <Products />],
    [PRODUCT_DETAILS_ROUTE, <ProductDetails />],
    [LOGIN_ROUTE, <Login />],
    [REGISTER_ROUTE, <Register />],
  ];
  return (
    <Routes>
      {routes.map(([route, component], idx) => (
        <Route key={idx} path={route} element={component} />
      ))}
      <Route path="*" element={<Navigate to={HOME_ROUTE} replace />} />
    </Routes>
  );
};
