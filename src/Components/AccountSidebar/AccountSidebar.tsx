import {
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  BorderColor as BorderColorIcon,
  ShoppingCart as CartIcon,
} from "@mui/icons-material";
import "Components/AccountSidebar/AccountSidebar.css";

export const AccountSidebar = () => (
  <ul className="common-side-menu show-account-side-menu">
    <li>
      <a href="/account" className="nav-link">
        <AccountCircleOutlinedIcon className="icons-size" />
        Account
      </a>
    </li>
    <li>
      <a href="/cart" className="nav-link">
        <CartIcon className="icons-size" />
        Cart
      </a>
    </li>
    <li>
      <a href="/orders" className="nav-link">
        <BorderColorIcon className="icons-size" />
        Orders
      </a>
    </li>
  </ul>
);
