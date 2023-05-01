import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext({
  searchValue: "",
  onChangeSearchInput: (e: any) => {},
});

export const SearchContextProvider = (props: any) => {
  const [searchValue, setSearchValue] = useState("");
  const HandleSearchInput = (e: any) => {
    setSearchValue(e.target.value);
  };
  return (
    <SearchContext.Provider
      value={{
        searchValue: searchValue,
        onChangeSearchInput: HandleSearchInput,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
