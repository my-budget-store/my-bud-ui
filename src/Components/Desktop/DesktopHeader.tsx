import AccountMenu from "components/shared/AccountMenu";
import LoginElement from "components/shared/LoginElement";
import LogoutElement from "components/shared/LogoutElement";
import { useAuth } from "react-oidc-context";
import { Link, useLoaderData } from "react-router-dom";
import { SearchBar } from "components/shared/SearchBar";
import {
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { ProductFiltersEntity } from "interfaces/Filter";

const DesktopHeader = () => {
  const auth = useAuth();
  const [productsData, filtersData] = useLoaderData() as [
    Product[],
    ProductFiltersEntity
  ];

  return (
    <header>
      <span>
        <Link to="/">
          <AccountCircleIcon />
          MyBud
        </Link>
      </span>
      <span className="dropdown">
        <label className="flex-c-w">
          <MenuIcon />
          Products
        </label>
        <div className="dropdown-container">
          <div className="dropdown-spacer" />
          <div className="dropdown-content">
            {productsData &&
              productsData.length > 0 &&
              productsData.map((product: Product) => (
                <Link
                  to={`Products/${product.category}`}
                  key={product.productId}
                >
                  {product.category}
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
            <Link to="/Account">
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
