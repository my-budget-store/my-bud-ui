import axios from "axios";
import { useContext, useState } from "react";
import { getCookie } from "Services/Helpers";
import { AuthContext } from "Store/AuthContext";
import { AccountNavigation } from "./AccountNavigation";
import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
  Login as LoginIcon,
} from "@mui/icons-material";

interface Product {
  name: string;
}
export const FullHeader = (props: any) => {
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
      {authContext.isLoginFlow ? (
        <ul className="ul">
          <li>
            <a href="/Home" className="nav-link">
              <AccountCircleIcon className="icons-size" />
              MyBud
            </a>
          </li>
        </ul>
      ) : (
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
              className="text-input"
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
      )}
    </header>
  );
};
