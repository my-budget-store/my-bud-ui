import AccountMenu from "components/shared/AccountMenu";
import { AccountCircleOutlined as AccountCircleOutlinedIcon } from "@mui/icons-material";
import LogoutElement from "components/shared/LogoutElement";
import LoginElement from "components/shared/LoginElement";
import { useAuth } from "react-oidc-context";

export default function AccountSidebar() {
  const auth = useAuth();

  return (
    <header className="common-side-menu show-account-side-menu ">
      {auth?.isAuthenticated ? (
        <>
          <LogoutElement />
          <span>
            <a href="/account">
              <AccountCircleOutlinedIcon />
              Account
            </a>
          </span>
          <AccountMenu />
        </>
      ) : (
        <LoginElement />
      )}
    </header>
  );
}