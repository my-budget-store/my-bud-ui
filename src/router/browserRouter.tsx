import Header from "components/Header";
import Account from "pages/Account";
import Cart from "pages/Cart";
import Home from "pages/Home";
import Orders from "pages/Orders";
import AllProducts from "pages/AllProducts";
import Wishlist from "pages/Wishlist";
import Error from "components/Error";
import ProtectedRoutes from "components/ProtectedRoutes";
import { productsLoader } from "router/loaders/productsLoader";
import { createBrowserRouter } from "react-router-dom";
import { ProductsByCategory } from "pages/ProductsByCategory";
import { productsByCategoryLoader } from "./loaders/productsByCategoryLoader";
import ProductAdmin from "pages/ProductAdmin";
import { ProductDetails } from "pages/ProductDetails";

export const router: any = createBrowserRouter([
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
        path: "/Products",
        element: <AllProducts />,
        loader: productsLoader,
      },
      {
        path: "/Products/:category",
        element: <ProductsByCategory />,
        loader: productsByCategoryLoader,
      },
      {
        path: "/ProductDetails",
        element: <ProductDetails />,
        // loader: productsByCategoryLoader,
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
          {
            path: "/product/create",
            element: <ProductAdmin />,
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
