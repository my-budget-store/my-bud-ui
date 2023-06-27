import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

const ProtectedRoutes = () => {
  const auth = useAuth();

  useEffect(() => {
    return () => {
      if (!auth.isAuthenticated) {
        auth.signinSilent().catch(() => {
          auth.signinRedirect();
        });
      }
    };
  }, []);

  return auth.isAuthenticated ? <Outlet /> : <></>;
};

export default ProtectedRoutes;
