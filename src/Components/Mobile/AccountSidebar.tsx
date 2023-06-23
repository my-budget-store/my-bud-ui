import AccountMenu from "components/shared/AccountMenu";
import { AccountCircleOutlined as AccountCircleOutlinedIcon } from "@mui/icons-material";
import LogoutElement from "components/shared/LogoutElement";
import { useAuth } from "react-oidc-context";
import LoginElement from "components/shared/LoginElement";

export default function AccountSidebar() {
  return (
    <header className="common-side-menu show-account-side-menu ">
      {useAuth().isAuthenticated ? (
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
