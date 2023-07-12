import Header from "components/Header";
import Account from "pages/Account";
import Cart from "pages/Cart";
import Home from "pages/Home";
import Orders from "pages/Orders";
import AllProducts from "pages/AllProducts";
import Wishlist from "pages/Wishlist";
import Error from "components/Error";
import ProductAdmin from "pages/ProductAdmin";
import ProtectedRoutes from "components/ProtectedRoutes";
import { productsLoader } from "router/loaders/productsLoader";
import { createBrowserRouter } from "react-router-dom";
import { ProductsByCategory } from "pages/ProductsByCategory";
import { productsByCategoryLoader } from "./loaders/productsByCategoryLoader";
import { ProductDetails } from "pages/ProductDetails";
import { productDetailsLoader } from "./loaders/productDetailsLoader";
import { productFiltersLoader } from "./loaders/productFiltersLoader";

export const router: any = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    loader: productFiltersLoader,
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
        path: "/ProductDetails/:productId",
        element: <ProductDetails />,
        loader: productDetailsLoader,
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
            path: "/products/add",
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
