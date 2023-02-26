import { useWindowSize } from "Store/useWindowSizeHook";
import { CompactHeader } from "./CompactHeader";
import { FullHeader } from "./DesktopHeader";
import { useState } from "react";
import "Styles/Header.css";

export const Header = () => {
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
        <FullHeader
          SearchValueChangeHandler={SearchValueChangeHandler}
          searchValue={searchValue}
        />
      ) : (
        <CompactHeader
          SearchValueChangeHandler={SearchValueChangeHandler}
          searchValue={searchValue}
        />
      )}
    </>
  );
};
