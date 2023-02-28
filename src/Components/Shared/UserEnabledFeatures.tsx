import {
  Favorite as FavIcon,
  ShoppingCart as CartIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "Store/AuthContext";
import { useWindowSize } from "Store/useWindowSizeHook";

export const UserEnabledFeatures = () => {
  const authContext = useContext(AuthContext);
  const isDesktopMode = useWindowSize();

  const LogoutLabel = (
    <label onClick={authContext.onLogoutHandler}>
      <LogoutIcon/>
      Logout
    </label>
  );
  return (
    <>
      <span className={`${isDesktopMode && "dropdown"}`}>
        <a href="/account">
          <AccountCircleOutlinedIcon/>
          <label>Account</label>
        </a>
        <span className="dropdown-content">{LogoutLabel}</span>
      </span>
      <span>
        <a href="/cart">
          <CartIcon/>
          <label>Cart</label>
        </a>
      </span>
      <span>
        <a href="/wishlist">
          <FavIcon/>
          <label>Wishlist</label>
        </a>
      </span>
      {!isDesktopMode && LogoutLabel}
    </>
  );
};
