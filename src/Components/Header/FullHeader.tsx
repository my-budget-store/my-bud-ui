import { useState } from "react";
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
import { getCookie } from "Shared/Helpers";

export const FullHeader = (props: any) => {
  interface Product {
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
  return (
    <header className="header">
      <ul className="ul">
        <li>
          <a href="/" className="nav-link">
            <AccountCircleIcon className="icons-size" />
            MyBud
          </a>
        </li>
        <li className="products-dropdown">
          <a
            href="/"
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
        <li>
          <input
            placeholder="Search..."
            className="search-bar-style"
            onChange={props.SearchValueChangeHandler}
            value={props.searchValue}
          />
        </li>
        <li className="spacer" />
        {!props.isUserLoggedIn ? (
          <li>
            <a href="/Login" className="nav-link">
              <LoginIcon className="icons-size" />
              Sign In
            </a>
          </li>
        ) : (
          <>
            <li>
              <a href="/orders" className="nav-link">
                <BorderColorIcon className="icons-size" />
                Orders
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
                Onkar
              </a>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};
