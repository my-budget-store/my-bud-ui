import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Product } from "../../interfaces/Product";
import { SearchBar } from "components/shared/SearchBar";
import { Link, useLoaderData } from "react-router-dom";

const PublicHeader = () => {
  const productsData = useLoaderData() as Product[];

  return (
    <>
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
            {productsData.map((product: Product) => (
              <Link to="/" key={product.productId}>
                {product.name}
              </Link>
            ))}
          </div>
        </div>
      </span>
      <SearchBar />
      <span className="spacer" />
    </>
  );
};

export default PublicHeader;
