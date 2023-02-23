import { useContext, useState } from "react";
import { useWindowSize } from "Store/useWindowSizeHook";
import { CompactHeader } from "./CompactHeader";
import { FullHeader } from "./FullHeader";
import { PublicHeader } from "./PublicHeader";
import { AuthContext } from "Store/AuthContext";
import "Styles/Header.css";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const UpdateSearchValue = (value: string) => setSearchValue(value);
  const SearchValueChangeHandler = (e: any) => {
    const value = e.target.value.toLowerCase();
    UpdateSearchValue(value);
  };
  const authContext = useContext(AuthContext);
  const [, width] = useWindowSize();
  return (
    <>
      {authContext.isUserLoggedIn ? (
        width < 768 ? (
          <CompactHeader
            SearchValueChangeHandler={SearchValueChangeHandler}
            searchValue={searchValue}
          />
        ) : (
          <FullHeader
            SearchValueChangeHandler={SearchValueChangeHandler}
            searchValue={searchValue}
          />
        )
      ) : (
        <PublicHeader />
      )}
    </>
  );
};