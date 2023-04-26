import { useContext, useState } from "react";
import { AuthContext } from "Store/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
  Login as LoginIcon,
} from "@mui/icons-material";
import { UserEnabledFeatures } from "../Shared/UserEnabledFeatures";
import ProductsService from "Services/ProductsService";
import { RootState } from "Store/Store";
import { storeSearchValue } from "Store/Slices/searchValueSlice";

interface Product {
  productId: string;
  userId: string;
  name: string;
  category: string;
  price: number;
  salePrice: number;
  image: string;
  imageUrl: string;
  quantity: number;
}

export const DesktopHeader = () => {
  const authContext = useContext(AuthContext);

  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: RootState) => state.searchValue.value
  );

  const [productsData, setProductsData] = useState([]);

  const HandleProductsMouseOver = async () => {
    const response = await ProductsService.GetProducts();
    setProductsData(response);
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
                  <a href="/" key={product.productId}>
                    {product.name}
                  </a>
                ))}
              </div>
            </div>
          </span>
          <span>
            <input
              placeholder="Search..."
              className="text-input"
              onChange={(e) => dispatch(storeSearchValue(e.target.value))}
              value={searchValue}
            />
          </span>
          <span className="spacer" />
          {!authContext.isUserLoggedIn ? (
            <span>
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
