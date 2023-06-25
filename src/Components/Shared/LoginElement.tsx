import { Login as LoginIcon } from "@mui/icons-material";
import { useAuth } from "react-oidc-context";

export default function LoginElement(): any {
  const auth = useAuth();

  async function signInRedirect() {
    await auth.signinRedirect();
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
