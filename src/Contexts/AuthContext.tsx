import { createContext } from "react";

let LoginContext = {
  isUserLoggedIn: false,
  ToggeleUserLoggedIn: () => {}
};

export const AuthContext = createContext(LoginContext);
