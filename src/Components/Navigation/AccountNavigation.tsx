import {
  Favorite as FavIcon,
  ShoppingCart as CartIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "Store/AuthContext";
import { useWindowSize } from "Store/useWindowSizeHook";

export const AccountNavigation = () => {
  const authContext = useContext(AuthContext);
  const isDesktopMode = useWindowSize();

  const LogoutLabel = (
    <label className="nav-link" onClick={authContext.onLogoutHandler}>
      <LogoutIcon className="icons-size" />
      Logout
    </label>
  );
  return (
    <>
      {!isDesktopMode && LogoutLabel}
      <li>
        <a href="/wishlist" className="nav-link">
          <FavIcon className="icons-size" />
          Wishlist
        </a>
      </li>
      <li>
        <a href="/cart" className="nav-link">
          <CartIcon className="icons-size" />
          Cart
        </a>
      </li>
      <li className={`${isDesktopMode && "dropdown"}`}>
        <a href="/account" className="nav-link">
          <AccountCircleOutlinedIcon className="icons-size" />
          Account
        </a>
        <div className="dropdown-content">{LogoutLabel}</div>
      </li>
    </>
  );
};
