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
            <AccountCircleIcon/>
            MyBud
          </a>
        </span>
      ) : (
        <>
          <span>
            <a href="/Home">
              <AccountCircleIcon/>
              <label>MyBud</label>
            </a>
          </span>
          <span className="dropdown">
            <a href="/Products" onMouseOver={HandleProductsMouseOver}>
              <MenuIcon/>
              <label>Products</label>
            </a>
            <span className="dropdown-content">
              {productsData.map((product: Product) => (
                <a href="/">{product.name}</a>
              ))}
            </span>
          </span>
          <span>
            <a href="/Orders">
              <NoteIcon/>
              <label>Orders</label>
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
          <span className="spacer"/>
          {!authContext.isUserLoggedIn ? (
            <span className="header-right">
              <a href="/Login">
                <LoginIcon/>
                <label>Sign In</label>
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
