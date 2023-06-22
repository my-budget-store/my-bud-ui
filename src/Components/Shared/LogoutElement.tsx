import { Login as LoginIcon } from "@mui/icons-material";
import { AuthContext } from "context/AuthContext";
import { useContext } from "react";

export default function LoginElement(): any {
  const auth = useContext(AuthContext);

  function signInRedirect() {
    auth.signInRedirect();
  }

  return (
    <span>
      <label className="clickable-element" onClick={signInRedirect}>
        <LoginIcon />
        Sign In
      </label>
    </span>
  );
}
