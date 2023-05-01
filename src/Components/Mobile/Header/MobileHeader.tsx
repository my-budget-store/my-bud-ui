import { useContext, useReducer, useState } from "react";
import { BackDrop } from "Components/Shared/BackDrop";
import { MenuSideBar } from "Components/Mobile/Sidebar/MenuSidebar";
import { AccountSidebar } from "Components/Mobile/Sidebar/AccountSidebar";
import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import "Styles/side-bars.css";
import "Styles/header.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "Store/RTKStore/Store";
import { storeSearchValue } from "Store/RTKStore/searchValueSlice";
import { SearchActionKind } from "Store/CustomStore/SearchValueStore";
import { SearchContext } from "Store/ContextProviders/SearchContext";
import { AuthContext } from "Store/ContextProviders/AuthContext";
import { useStore } from "Store/CustomStore/Store";

export const MobileHeader = (props: any) => {
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

  const [isMenuSideDrawerVisible, setMenuSideDrawerVisibility] =
    useState(false);

  const [isAccountSideDrawerVisible, setAccountSideDrawerVisibility] =
    useState(false);

  const ToggleMenuSideDrawer = (toggle: boolean) =>
    setMenuSideDrawerVisibility(toggle);

  const ToggleAccountSideDrawer = (toggle: boolean) =>
    setAccountSideDrawerVisibility(toggle);

  if (isMenuSideDrawerVisible) {
    return (
      <>
        <MenuSideBar />
        <BackDrop ToggleMenuSideDrawer={ToggleMenuSideDrawer} />
      </>
    );
  }
  if (isAccountSideDrawerVisible) {
    return (
      <>
        <AccountSidebar />
        <BackDrop ToggleAccountSideDrawer={ToggleAccountSideDrawer} />
      </>
    );
  }
  return (
    <>
      <header>
        <span className="menu-account-toggle">
          <MenuIcon onClick={() => ToggleMenuSideDrawer(true)} />
          <a href="/">MyBud</a>
        </span>
        <span className="spacer" />
        <span className="menu-account-toggle">
          <AccountCircleIcon onClick={() => ToggleAccountSideDrawer(true)} />
        </span>
      </header>
      <header>
        <input
          placeholder="Search..."
          className="search-bar-style"
          // onChange={props.SearchValueChangeHandler}
          // value={props.searchValue}
          onChange={HandleSearchInput}
          value={searchValue}
        />
      </header>
    </>
  );
};
