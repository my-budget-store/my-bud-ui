import AccountMenu from "components/shared/AccountMenu";
import LoginElement from "components/shared/LoginElement";
import LogoutElement from "components/shared/LogoutElement";
import { useAuth } from "react-oidc-context";
import { Link, useLoaderData } from "react-router-dom";
import { Product } from "../../interfaces/Product";
import { SearchBar } from "components/shared/SearchBar";
import {
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { FilterBase } from "interfaces/Filter";

const DesktopHeader = () => {
  const auth = useAuth();
  const [productsData, filtersData] = useLoaderData() as Array<
    Product[] | FilterBase[]
  >;

  return (
    <header>
      <span>
        <Link to="/">
          <AccountCircleIcon />
          MyBud
        </Link>
      </span>
      <span className="dropdown">
        <Link to="/Products">
          <MenuIcon />
          Products
        </Link>
        <div className="dropdown-container">
          <div className="dropdown-spacer" />
          <div className="dropdown-content">
            {(productsData as Product[]).map((product: Product) => (
              <Link to="/" key={product.productId}>
                {product.name}
              </Link>
            ))}
          </div>
        </div>
      </span>
      <SearchBar />
      <span className="spacer" />
      {auth?.isAuthenticated ? (
        <>
          <AccountMenu />
          <span className="dropdown">
            <Link to="/account">
              <AccountCircleOutlinedIcon />
              Account
            </Link>
            <div className="dropdown-container right">
              <div className="dropdown-spacer" />
              <div className="dropdown-content">
                <LogoutElement />
              </div>
            </div>
          </span>
        </>
      ) : (
        <LoginElement />
      )}
    </header>
  );
};

export default DesktopHeader;
