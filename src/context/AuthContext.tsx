import { createContext, useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router";

export const AuthContext = createContext({
  signInRedirect: () => {},
  signOutRedirect: () => {},
});

export const AuthContextProvider = (props: any) => {
  const auth = useAuth();

  const navigate = useNavigate();
  async function signInRedirect() {
    await auth.signinRedirect();
  }

  async function signOutRedirect() {
    await auth.signoutRedirect();
  }

  useEffect(() => {
    const callback = () => {
      const staySignedIn = window.confirm(
        "You're about to be signed out due to inactivity. Press OK to stay signed in."
      );
      if (staySignedIn) {
        auth.signinSilent();
      } else {
        auth.signoutSilent();
        navigate("/Home");
      }
    };
    return auth.events.addAccessTokenExpiring(callback);
  }, [auth.events, auth.signinSilent, auth.signoutSilent]);

  return (
    <AuthContext.Provider
      value={{
        signInRedirect: signInRedirect,
        signOutRedirect: signOutRedirect,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
