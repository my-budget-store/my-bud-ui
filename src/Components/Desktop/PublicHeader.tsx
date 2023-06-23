import ProductsService from "services/productsService";
import { useState } from "react";
import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Product } from "../../interfaces/Product";
import { SearchBar } from "components/shared/SearchBar";

const PublicHeader = () => {
  const [productsData, setProductsData] = useState([]);

  const HandleProductsMouseOver = async () => {
    const response = await ProductsService.GetProducts();
    setProductsData(response);
  };

  return (
    <>
      <span>
        <a href="/">
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
              <a href="/" key={product.productId}>
                {product.name}
              </a>
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
