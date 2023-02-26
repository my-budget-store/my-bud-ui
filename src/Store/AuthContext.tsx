import AuthService from "Services/AuthService";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  isUserLoggedIn: false,
  isLoginFlow: false,
  onLoginHandler: () => {},
  onLogoutHandler: () => {},
  toggleLoginFlow: (bool: any) => {},
});

export const AuthContextProvider = (props: any) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoginFlow, setLoginFlow] = useState(false);

  const toggleLoginFlow = (bool: boolean) => {
    setLoginFlow(bool);
  };
  const onLoginHandler = () => {
    setIsUserLoggedIn(true);
  };

  const onLogoutHandler = () => {
    AuthService.Logout();
    setIsUserLoggedIn(false);
  };

  useEffect(() => {
    if (AuthService.ValidateUserToken()) setIsUserLoggedIn(true);
    
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn: isUserLoggedIn,
        isLoginFlow: isLoginFlow,
        onLoginHandler: onLoginHandler,
        onLogoutHandler: onLogoutHandler,
        toggleLoginFlow: toggleLoginFlow,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
