import Header from "components/Header";
import Account from "pages/Account";
import Cart from "pages/Cart";
import Home from "pages/Home";
import Orders from "pages/Orders";
import Products from "pages/Products";
import Wishlist from "pages/Wishlist";
import Error from "components/Error";
import ProtectedRoutes from "components/ProtectedRoutes";
import { productsLoader } from "loaders/loaders";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    loader: productsLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/wishlist",
            element: <Wishlist />,
          },
          {
            path: "/orders",
            element: <Orders />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/account",
            element: <Account />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
