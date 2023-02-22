import { useEffect, useState } from "react";
import { Header } from "Components/Header/Header";
import { AppRoutes } from "./Routes/AppRoutes";
import AuthService from "Services/AuthService";
import "./Components/Login/Login.css";

export const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const LoginHandler = () => {
    setIsUserLoggedIn(!isUserLoggedIn);
  };

  useEffect(() => {
    const isValid = AuthService.ValidateUserToken();
    if (isValid) setIsUserLoggedIn(true);
  }, []);

  return (
    <>
      <Header isUserLoggedIn={isUserLoggedIn} />
      <AppRoutes LoginHandler={LoginHandler} />
    </>
  );
};
