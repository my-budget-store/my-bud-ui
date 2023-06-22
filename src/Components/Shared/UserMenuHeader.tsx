import {
  Favorite as FavIcon,
  ShoppingCart as CartIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { AuthContext } from "context/AuthContext";
import { useWindowSize } from "hooks/window-size";
import { useContext } from "react";

export const UserMenuHeader = () => {
  const isDesktopMode = useWindowSize();
  const auth = useContext(AuthContext);

  function signOutRedirectCallback() {
    auth.signOutRedirect();
  }

  const LogoutLink = (
    <span>
      <label className="clickable-element" onClick={signOutRedirectCallback}>
        <LogoutIcon />
        Logout
      </label>
    </span>
  );

  const LogoutInDropDown = (
    <div className="dropdown-container right">
      <div className="dropdown-spacer" />
      <div className="dropdown-content">{LogoutLink}</div>
    </div>
  );

  return (
    <>
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
