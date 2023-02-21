import {
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  BorderColor as BorderColorIcon,
  ShoppingCart as CartIcon,
} from "@mui/icons-material";
import "Components/AccountSidebar/AccountSidebar.css";

export const AccountSidebar = () => {
  return (
    <div className="common-side-menu show-account-side-menu">
      <div className="common-side-menu-div right-side-menu">
        <div className="common-sidebar-items right-sidebar-items">
          <a href="/account" className="nav-link">
            <AccountCircleOutlinedIcon className="icons-size" />
            Account
          </a>
        </div>
        <div className="common-sidebar-items right-sidebar-items">
          <a href="/cart" className="nav-link">
            <CartIcon className="icons-size" />
            Cart
          </a>
        </div>
        <div className="common-sidebar-items right-sidebar-items">
          <a href="/orders" className="nav-link">
            <BorderColorIcon className="icons-size" />
            Orders
          </a>
        </div>
      </div>
    </div>
  );
};
