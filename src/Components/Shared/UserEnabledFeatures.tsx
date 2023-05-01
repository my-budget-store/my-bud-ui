import {
  Favorite as FavIcon,
  ShoppingCart as CartIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "Store/ContextProviders/AuthContext";
import { useWindowSize } from "Store/CustomHooks/useWindowSizeHook";

export const UserEnabledFeatures = () => {
  const authContext = useContext(AuthContext);
  const isDesktopMode = useWindowSize();

  const LogoutLink = (
    <span>
      <a href="/Logout">
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
