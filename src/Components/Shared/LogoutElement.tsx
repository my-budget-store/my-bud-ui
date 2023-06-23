import { Logout as LogoutIcon } from "@mui/icons-material";
import { AuthContext } from "context/AuthContext";
import { useContext } from "react";

export default function LogoutElement(): any {
  const auth = useContext(AuthContext);

  function signOutRedirect() {
    auth.signOutRedirect();
  }

  return (
    <span>
      <label className="clickable-element" onClick={signOutRedirect}>
        <LogoutIcon />
        Sign out
      </label>
    </span>
  );
}
