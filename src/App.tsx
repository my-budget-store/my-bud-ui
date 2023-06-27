import Home from "pages/Home";
import Products from "pages/Products";
import Wishlist from "pages/Wishlist";
import Orders from "pages/Orders";
import Cart from "pages/Cart";
import Account from "pages/Account";
import Error from "components/Error";
import Header from "components/Header";
import axios from "axios";
import ProtectedRoutes from "components/ProtectedRoutes";
import { Routes, Route, RouterProvider } from "react-router-dom";
import { v4 as guid } from "uuid";
import { useAuth } from "react-oidc-context";
import { productsLoader } from "loaders/loaders";
import { router } from "components/Routes/routes";

export default function App() {
  const auth = useAuth();

  axios.interceptors.request.use(
    (config) => {
      config.headers["X-CorrelationId"] = guid();
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  switch (auth.activeNavigator) {
    case "signinSilent":
      return null;
    case "signoutRedirect":
      return null;
  }

  if (auth.isLoading) {
    return null;
  }
  return <></>;
}
