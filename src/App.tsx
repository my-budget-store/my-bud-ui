import { Routes, Route } from "react-router-dom";
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
import { v4 as guid } from "uuid";
import { useAuth } from "react-oidc-context";

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

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
