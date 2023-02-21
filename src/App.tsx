import { useEffect, useState } from "react";
import { PublicHeader } from "Components/Header/PublicHeader";
import { Header } from "Components/Header/Header";
import AuthService from "Services/AuthService";
import "./Components/Login/Login.css";
import { AppRoutes } from "./AppRoutes";

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
      {AppRoutes(LoginHandler)}
    </>
  );

  useEffect(() => {
    const isValid = AuthService.ValidateUserToken();
    if (isValid) setIsUserLoggedIn(true);
  }, []);

  return content;
}
