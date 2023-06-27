import AccountMenu from "components/shared/AccountMenu";
import PublicHeader from "components/desktop/PublicHeader";
import LoginElement from "components/shared/LoginElement";
import LogoutElement from "components/shared/LogoutElement";
import { AccountCircleOutlined as AccountCircleOutlinedIcon } from "@mui/icons-material";
import { useAuth } from "react-oidc-context";
import { Link } from "react-router-dom";

const DesktopHeader = () => {
  const auth = useAuth();

  return (
    <header>
      <PublicHeader />
      {auth?.isAuthenticated ? (
        <>
          <AccountMenu />
          <span className="dropdown">
            <Link to="/account">
              <AccountCircleOutlinedIcon />
              Account
            </Link>
            <div className="dropdown-container right">
              <div className="dropdown-spacer" />
              <div className="dropdown-content">
                <LogoutElement />
              </div>
            </div>
          </span>
        </>
      ) : (
        <LoginElement />
      )}
    </header>
  );
};

export default DesktopHeader;
