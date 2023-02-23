import { Header } from "Components/Navigation/Header";
import { Account } from "Pages/Account";
import { Orders } from "Pages/Orders";
import { Products } from "Pages/Products";
import { Routes, Route } from "react-router";
import { Login } from "Components/Login/Login";
import { Home } from "Pages/Home";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
};
