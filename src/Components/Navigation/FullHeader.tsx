import axios from "axios";
import { useContext, useState } from "react";
import { getCookie } from "Services/Helpers";
import { AuthContext } from "Store/AuthContext";
import { AccountNavigation } from "./AccountFeatures";
import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
  Login as LoginIcon,
} from "@mui/icons-material";

export const FullHeader = (props: any) => {
  interface Product {
    name: string;
  }
  const authContext = useContext(AuthContext);

  const tokenStr = getCookie("token");
  const [productsData, setProductsData] = useState([]);
  const HandleProductsMouseOver = () => {
    axios
      .get("https://localhost:7101/mybud/v1/products", {
        headers: { Authorization: `Bearer ${tokenStr}` },
      })
      .then((response) => {
        setProductsData(response.data);
      });
  };
  return (
    <header className="header">
      <ul className="ul">
        <li>
          <a href="/Home" className="nav-link">
            <AccountCircleIcon className="icons-size" />
            MyBud
          </a>
        </li>
        <li className="dropdown">
          <a
            href="/Products"
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
        {!authContext.isUserLoggedIn ? (
          <li>
            <a href="/Login" className="nav-link">
              <LoginIcon className="icons-size" />
              Sign In
            </a>
          </li>
        ) : (
          <>
            <AccountNavigation />
          </>
        )}
      </ul>
    </header>
  );
};
