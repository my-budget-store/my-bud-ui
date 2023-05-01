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
import { AuthContext } from "Store/ContextProviders/AuthContext";

export const MobileHeader = () => {
  const authContext = useContext(AuthContext);

  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: RootState) => state.searchValue.value
  );

  const HandleSearchInput = (e: any) => {
    dispatch(storeSearchValue(e.target.value));
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
          onChange={HandleSearchInput}
          value={searchValue}
        />
      </header>
    </>
  );
};
