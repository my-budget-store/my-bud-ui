import AuthService from "Services/AuthService";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  isUserLoggedIn: false,
  onLoginHandler: () => {},
  onLogoutHandler: () => {},
});

export const AuthContextProvider = (props: any) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  
  const onLoginHandler = () => {
    setIsUserLoggedIn(true);
  };

  const onLogoutHandler = () => {
    AuthService.Logout();
    setIsUserLoggedIn(false);
  };

  useEffect(() => {
    if (AuthService.ValidateUserToken()) setIsUserLoggedIn(true);
    return () => {};
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn: isUserLoggedIn,
        onLoginHandler: onLoginHandler,
        onLogoutHandler: onLogoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
