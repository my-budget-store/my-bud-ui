import { Account } from "Pages/Account";
import { Orders } from "Pages/Orders";
import { Products } from "Pages/Products";
import { Routes, Route } from "react-router";
import { Login } from "Components/Shared/Login";
import { Home } from "Pages/Home";
import { useState } from "react";
import { useWindowSize } from "Store/useWindowSizeHook";
import { DesktopHeader } from "Components/Desktop/DesktopHeader";
import { MobileHeader } from "Components/Mobile/Header/MobileHeader";
import { Wishlist } from "Pages/Wishlist";

export const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const UpdateSearchValue = (value: string) => setSearchValue(value);
  const SearchValueChangeHandler = (e: any) => {
    const value = e.target.value.toLowerCase();
    UpdateSearchValue(value);
  };

  const isDesktopMode = useWindowSize();

  return (
    <>
      {isDesktopMode ? (
        <DesktopHeader
          SearchValueChangeHandler={SearchValueChangeHandler}
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
          <Route path="/account" element={<Account />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};
