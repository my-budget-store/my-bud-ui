import {
  Favorite as FavIcon,
  ShoppingCart as CartIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useWindowSize } from "Store/CustomHooks/useWindowSizeHook";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";

export const UserEnabledFeatures = () => {
  const isDesktopMode = useWindowSize();
  const auth = useAuth();
  const navigate = useNavigate();
  
  async function signOutRedirectCallback() {
    await auth.signoutRedirect();
    navigate("/Home", { replace: true });
  }
  const LogoutLink = (
    <span>
      <a href="" onClick={signOutRedirectCallback}>
        <LogoutIcon />
        Logout
      </a>
    </span>
  );

  const LogoutInDropDown = (
    <div
      className="dropdown-container right"
    >
      <div className="dropdown-spacer" />
      <div className="dropdown-content">{LogoutLink}</div>
    </div>
  );

  return (
    <>
      {!isDesktopMode && LogoutLink}
      <span>
        <a href="/wishlist">
          <FavIcon />
          Wishlist
        </a>
      </span>
      <span>
        <a href="/cart">
          <CartIcon />
          Cart
        </a>
      </span>
      <span className={`${isDesktopMode && "dropdown"}`}>
        <a href="/account">
          <AccountCircleOutlinedIcon />
          Account
        </a>
        {LogoutInDropDown}
      </span>
    </>
  );
};
