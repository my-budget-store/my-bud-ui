import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { Login } from "Components/Login/Login";
import { PublicHeader } from "Components/Header/PublicHeader";
import { Home } from "@mui/icons-material";
import { Account } from "Pages/Account";
import { Orders } from "Pages/Orders";
import { Products } from "Pages/Products";
import { Header } from "Components/Header/Header";
import AuthService from "Services/AuthService";
import "./Components/Login/Login.css";

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const LoginHandler = () => {
    setIsUserLoggedIn(!isUserLoggedIn);
  };

  const content = (
    <>
      {isUserLoggedIn ? (
        <Header isUserLoggedIn={isUserLoggedIn} />
      ) : (
        <PublicHeader />
      )}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Login" element={<Login onLogin={LoginHandler} />} />
      </Routes>
    </>
  );

  useEffect(() => {
    // return () => {
    const isValid = AuthService.ValidateUserToken();
    if (isValid) setIsUserLoggedIn(true);
    // };
  });

  return content;
}
