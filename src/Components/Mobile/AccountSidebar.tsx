import AccountMenu from "components/shared/AccountMenu";
import { AccountCircleOutlined as AccountCircleOutlinedIcon } from "@mui/icons-material";
import LogoutElement from "components/shared/LogoutElement";
import LoginElement from "components/shared/LoginElement";
import { useAuth } from "react-oidc-context";
import { Link } from "react-router-dom";

export default function AccountSidebar() {
  const auth = useAuth();

  return (
    <header className="common-side-menu show-account-side-menu ">
      {auth?.isAuthenticated ? (
        <>
          <LogoutElement />
          <span>
            <Link to="/account">
              <AccountCircleOutlinedIcon />
              Account
            </Link>
          </span>
          <AccountMenu />
        </>
      ) : (
        <LoginElement />
      )}
    </header>
  );
}
