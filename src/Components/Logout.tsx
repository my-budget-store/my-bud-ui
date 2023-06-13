import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "Store/ContextProviders/AuthContext";
import "Styles/forms.css";

export const Logout = () => {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.onLogoutHandler();
    navigate("/Home", { replace: true });
  }, []);

  return <></>;
};
