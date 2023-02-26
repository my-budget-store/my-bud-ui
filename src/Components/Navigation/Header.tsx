import { useContext } from "react";
import { useWindowSize } from "Store/useWindowSizeHook";
import { CompactHeader } from "./CompactHeader";
import { FullHeader } from "./FullHeader";
import { PublicHeader } from "./PublicHeader";
import { AuthContext } from "Store/AuthContext";
import "Styles/Header.css";
import { useReducer } from "react";

const initialState = { searchValue: "" };
export const SearchValueReducer = (state: any, action: any) => {
  switch (action.type) {
    case "set":
      return (state = {
        searchValue: action.searchValue,
      });

    default:
      break;
  }
};

export const Header = () => {
  const [state, dispatch] = useReducer(SearchValueReducer, initialState);
  const SearchValueChangeHandler = (e: any) => {
    dispatch({
      type: "set",
      searchValue: e.target.value.toLowerCase(),
    });
  };

  //const [searchValue, setSearchValue] = useState("");
  // const UpdateSearchValue = (value: string) => setSearchValue(value);
  //const SearchValueChangeHandler = (e: any) => {
  //const value = e.target.value.toLowerCase();
  // UpdateSearchValue(value);
  // };
  //TODO: implement redux for searchvaluehandler
  const authContext = useContext(AuthContext);
  const isDesktopMode = useWindowSize();
  return (
    <>
      {authContext.isUserLoggedIn ? (
        isDesktopMode ? (
          <FullHeader
            SearchValueChangeHandler={SearchValueChangeHandler}
            searchValue={state?.searchValue}
          />
        ) : (
          <CompactHeader
            SearchValueChangeHandler={SearchValueChangeHandler}
            searchValue={state?.searchValue}
          />
        )
      ) : (
        <PublicHeader />
      )}
    </>
  );
};
