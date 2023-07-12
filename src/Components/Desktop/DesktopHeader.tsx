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
import { Category, SubCategory } from "interfaces/Category";

const DesktopHeader = () => {
  const auth = useAuth();
  const categoriesData = useLoaderData() as Category[];

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
          Categories
        </label>
        <span className="products-container common-container">
          {/* <div className="dropdown-content">
            {categoriesData &&
              categoriesData.length > 0 &&
              categoriesData.map((product: Product) => (
                <Link
                  to={`Products/${product.category}`}
                  key={product.productId}
                >
                  {product.category}
                </Link>
              ))}
          </div> */}
          {categoriesData &&
            categoriesData.length > 0 &&
            categoriesData.map((category: Category) => (
              <div className="dropdown-content subcategory-subdropdown">
                <span>
                  <Link to={`Products/${category.categoryName}`}>
                    {category.categoryName}
                  </Link>
                </span>
                <span
                  className="subcategory-container common-container"
                >
                  {category.subCategories &&
                    category.subCategories.length > 0 && (
                      // <span>
                      <>
                        {category.subCategories.map(
                          (subCategory: SubCategory) => (
                            <Link
                              to={`Products/${category.categoryName}/${subCategory.subCategoryName}`}
                              key={subCategory.subCategoryId}
                              className="dropdown-content"
                            >
                              {subCategory.subCategoryName}
                            </Link>
                          )
                        )}
                      </>
                    )}
                </span>
              </div>
            ))}
        </span>
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
            <div className="signout-container common-container">
              <div className="dropdown-content">
                <LogoutElement />
              </div>
              <div className="dropdown-content">
                <Link to="/products/add">Add Products</Link>
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
