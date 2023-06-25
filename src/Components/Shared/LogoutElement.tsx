import { Logout as LogoutIcon } from "@mui/icons-material";
import { useAuth } from "react-oidc-context";

export default function LogoutElement(): any {
  const auth = useAuth();

  async function signOutRedirect() {
    await auth.signoutRedirect();
    await auth.removeUser();
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
