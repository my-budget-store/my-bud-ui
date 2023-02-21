import { Routes, Route } from "react-router";
import { Login } from "Components/Login/Login";
import { Home } from "@mui/icons-material";
import { Account } from "Pages/Account";
import { Orders } from "Pages/Orders";
import { Products } from "Pages/Products";

export const AppRoutes = (LoginHandler: () => void) => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/products" element={<Products />} />
      <Route path="/Login" element={<Login onLogin={LoginHandler} />} />
    </Routes>
  );
};
