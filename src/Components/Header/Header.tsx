import { useState } from "react";
import { BackDrop } from "Components/UI/BackDrop";
import { MenuSideBar } from "Components/MenuSidebar/MenuSidebar";
import { AccountSidebar } from "Components/AccountSidebar/AccountSidebar";
import { WindowSize } from "Shared/Helpers";
import axios from "axios";
import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
  Login as LoginIcon,
  ShoppingCart as CartIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  BorderColor as BorderColorIcon,
} from "@mui/icons-material";
import "Components/Header/Header.css";
import { getCookie } from "Shared/CookieHelper";

export const Header = (props: any) => {
  const [isSideMenuDrawerVisible, setSideMenuVisibility] = useState(false);
  const ShowMenuSideDrawer = (bool: boolean) => setSideMenuVisibility(bool);
  const clickMenuBarHandler = () => {
    ShowMenuSideDrawer(true);
  };

  const [isAccountSideDrawerVisible, setAccountMenuVisibility] =
    useState(false);
  const ShowAccountSideDrawer = (bool: boolean) =>
    setAccountMenuVisibility(bool);
  const clickAccountBarHandler = () => {
    ShowAccountSideDrawer(true);
  };

  const [searchValue, setSearchValue] = useState("");
  const MaintainSearchValue = (value: string) => setSearchValue(value);
  const MaintainSearchValueHandler = (e: any) => {
    var value = e.target.value.toLowerCase();
    MaintainSearchValue(value);
  };

  interface Product {
    // name of product
    name: string;
  }
  const tokenStr = getCookie("token");
  const [productsData, setProductsData] = useState([]);

  function HandleProductsMouseOver() {
    axios
      .get("https://localhost:7101/mybud/v1/products", {
        headers: { Authorization: `Bearer ${tokenStr}` },
      })
      .then((response) => {
        setProductsData(response.data);
      });
  }

  const [, width] = WindowSize();
  if (width < 768) {
    if (isAccountSideDrawerVisible) {
      return (
        <>
          <AccountSidebar />
          <BackDrop ShowAccountSideDrawer={ShowAccountSideDrawer} />
        </>
      );
    }
    if (isSideMenuDrawerVisible) {
      return (
        <>
          <MenuSideBar />
          <BackDrop ShowMenuSideDrawer={ShowMenuSideDrawer} />
        </>
      );
    }
    return (
      <>
        <div className="compactheader">
          <div className="menu-account-toggle">
            <MenuIcon onClick={clickMenuBarHandler} />
          </div>
          <a href="/" className="nav-link">
            MyBud
          </a>
          <div className="spacer" />
          <div className="menu-account-toggle">
            <AccountCircleIcon onClick={clickAccountBarHandler} />
          </div>
        </div>
        <div className="compactheader">
          <input
            className="search-bar-style"
            onChange={MaintainSearchValueHandler}
            value={searchValue}
          />
        </div>
      </>
    );
  }
  return (
    <header className="header">
      <ul className="ul">
        <li className="header-li">
          <a href="/" className="nav-link">
            <AccountCircleIcon className="icons-size" />
            MyBud
          </a>
        </li>
        <li className="header-li">
          <a
            href="/products"
            className="nav-link"
            onMouseOver={HandleProductsMouseOver}
          >
            <MenuIcon className="icons-size" />
            Products
          </a>
          <div className="dropdown-content">
            {productsData.map((product: Product) => (
              <a href="/">{product.name}</a>
            ))}
          </div>
        </li>
        <input
          placeholder="Search..."
          className="search-bar-style"
          onChange={MaintainSearchValueHandler}
          value={searchValue} 
        />
        <li className="spacer" />
        {!props.isUserLoggedIn ? (
          <li className="header-li">
            <a href="/Login" className="nav-link">
              <LoginIcon className="icons-size" />
              Sign In
            </a>
          </li>
        ) : (
          <>
            <li className="header-li">
              <a href="/orders" className="nav-link">
                <BorderColorIcon className="icons-size" />
                Orders
              </a>
            </li>
            <li className="header-li">
              <a href="/cart" className="nav-link">
                <CartIcon className="icons-size" />
                Cart
              </a>
            </li>
            <li className="header-li">
              <a href="/account" className="nav-link">
                <AccountCircleOutlinedIcon className="icons-size" />
                Onkar
              </a>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};
