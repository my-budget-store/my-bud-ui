import { Login as LoginIcon } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useAuth } from "react-oidc-context";


export function LoginHeader(): any {
  
  const auth = useAuth();
  const navigate = useNavigate();
  function signInRedirectCallback() {
    auth.signinRedirect();
    navigate("/Home", { replace: true });
  }

  return (
    <>
      <span>
        <a href="" onClick={signInRedirectCallback}>
          <LoginIcon />
          Sign In
        </a>
      </span>
    </>
  );
}
