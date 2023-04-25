import { Account } from "Pages/Account";
import { Orders } from "Pages/Orders";
import { Products } from "Pages/Products";
import { Routes, Route } from "react-router";
import { Login } from "Components/Shared/Login";
import { Home } from "Pages/Home";
import { useEffect, useState } from "react";
import { useWindowSize } from "Store/useWindowSizeHook";
import { DesktopHeader } from "Components/Desktop/DesktopHeader";
import { MobileHeader } from "Components/Mobile/Header/MobileHeader";
import { Wishlist } from "Pages/Wishlist";
import { getCookie, removeCookie, setCookie } from "Services/Helpers";
import { Cart } from "Pages/Cart";
import { Logout } from "Components/Shared/Logout";

export const App = () => {

  const [searchValue, setSearchValue] = useState("");
  const UpdateSearchValue = (value: string) => setSearchValue(value);

  const SearchValueChangeHandler = (e: any) => {
    const value = e.target.value.toLowerCase();
    UpdateSearchValue(value);
  };

  const ThemeIconHandler = (e: any) => {
    removeCookie("theme");
    setCookie("theme", e.target.value.toLowerCase());
    document.documentElement.setAttribute(
      "theme",
      e.target.value.toLowerCase()
    );
  };

  useEffect(() => {
    const theme = getCookie("theme");
    if (theme) {
      document.documentElement.setAttribute("theme", theme.toLowerCase());
    }
    return () => {};
  }, []);

  const isDesktopMode = useWindowSize();

  return (
    <>
      {isDesktopMode ? (
        <DesktopHeader
          SearchValueChangeHandler={SearchValueChangeHandler}
          // ThemeIconHandler={ThemeIconHandler}
          searchValue={searchValue}
        />
      ) : (
        <MobileHeader
          SearchValueChangeHandler={SearchValueChangeHandler}
          searchValue={searchValue}
        />
      )}
      <div className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/account"
            element={<Account ThemeIconHandler={ThemeIconHandler} />}
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </div>
    </>
  );
};
