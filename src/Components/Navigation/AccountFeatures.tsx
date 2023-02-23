import {
  Favorite as FavIcon,
  ShoppingCart as CartIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
} from "@mui/icons-material";

export const AccountNavigation = () => (
  <>
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
    <li>
      <a href="/account" className="nav-link">
        <AccountCircleOutlinedIcon className="icons-size" />
        Account
      </a>
    </li>
  </>
);
