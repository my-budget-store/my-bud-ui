import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "Store/AuthContext";

export const Logout = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  authContext.onLogoutHandler();
  navigate("/", { replace: true });
};
