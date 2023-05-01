import { useContext, useEffect, useReducer, useState } from "react";
import { AuthContext } from "Store/ContextProviders/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
  Login as LoginIcon,
} from "@mui/icons-material";
import { UserEnabledFeatures } from "../Shared/UserEnabledFeatures";
import ProductsService from "Services/ProductsService";
import { RootState } from "Store/RTKStore/Store";
import { storeSearchValue } from "Store/RTKStore/searchValueSlice";
import {
  SearchActionKind,
  SearchValue,
} from "Store/CustomStore/SearchValueStore";
import { SearchContext } from "Store/ContextProviders/SearchContext";
import { useStore } from "Store/CustomStore/Store";

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

export const DesktopHeader = (props: any) => {
  const authContext = useContext(AuthContext);

  // Custom Hook pattern
  const dispatch = useStore(false)[1];
  const state = useStore()[0];
  const [searchValue, setSearchValue] = useState(state.searchValue);

  // RTK pattern
  // const dispatch = useDispatch();
  // const searchValue = useSelector(
  //   (state: RootState) => state.searchValue.value
  // );

  // Context Api pattern
  // const searchContext = useContext(SearchContext);
  // const searchValue = searchContext.searchValue;

  const HandleSearchInput = (e: any) => {
    // Custom Hook pattern
    setSearchValue(e.target.value);
    dispatch(SearchActionKind.SetSearchValue, e.target.value);

    // RTK pattern
    // dispatch(storeSearchValue(e.target.value));

    // Context Api pattern
    // searchContext.onChangeSearchInput(e);
  };

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
              // onChange={props.SearchValueChangeHandler}
              // value={props.searchValue}
              onChange={HandleSearchInput}
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
