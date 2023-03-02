import { useContext, useState } from "react";
import { getCookie } from "Services/Helpers";
import { AuthContext } from "Store/AuthContext";
import axios from "axios";
import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
  Login as LoginIcon,
  Note as NoteIcon,
} from "@mui/icons-material";
import { UserEnabledFeatures } from "../Shared/UserEnabledFeatures";

interface Product {
  name: string;
}
export const DesktopHeader = (props: any) => {
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
    <header>
      {authContext.isLoginFlow ? (
        <span>
          <a href="/Home">
            <AccountCircleIcon />
            MyBud
          </a>
        </span>
      ) : (
        <>
          <span>
            <a href="/Home">
              <AccountCircleIcon />
              MyBud
            </a>
          </span>
          <span className="dropdown">
            <a href="/Products" onMouseOver={HandleProductsMouseOver}>
              <MenuIcon />
              Products
            </a>
            <div className="dropdown-container">
              <div className="dropdown-spacer" />
              <div className="dropdown-content">
                {productsData.map((product: Product) => (
                  <a href="/">{product.name}</a>
                ))}
              </div>
            </div>
          </span>
          <span>
            <a href="/Orders">
              <NoteIcon />
              Orders
            </a>
          </span>
          <span>
            <input
              placeholder="Search..."
              className="text-input"
              onChange={props.SearchValueChangeHandler}
              value={props.searchValue}
            />
          </span>
          <span className="spacer" />
          {!authContext.isUserLoggedIn ? (
            <span className="header-right">
              <a href="/Login">
                <LoginIcon />
                Sign In
              </a>
            </span>
          ) : (
            <>
              <UserEnabledFeatures />
            </>
          )}
        </>
      )}
    </header>
  );
};
