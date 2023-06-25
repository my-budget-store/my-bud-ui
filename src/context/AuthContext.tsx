import { createContext, useEffect } from "react";
import { useAuth } from "react-oidc-context";

export const AuthContext = createContext({});

export const AuthContextProvider = (props: any) => {
  const auth = useAuth();

  useEffect(() => {
    const callback = () => {
      const staySignedIn = window.confirm(
        "You're about to be signed out due to inactivity. Press OK to stay signed in."
      );
      if (staySignedIn) {
        auth.signinSilent();
      } else {
        auth.signoutSilent();
      }
    };
    return auth.events.addAccessTokenExpiring(callback);
  }, [auth.isLoading, auth.events, auth.signinSilent, auth.signoutSilent]);

  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
};
