import { useState } from "react";
import { BackDrop } from "components/shared/BackDrop";
import { MenuSideBar } from "components/mobile/MenuSidebar";
import { AccountSidebar } from "components/mobile/AccountSidebar";
import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import "styles/side-bars.css";
import "styles/header.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { storeSearchValue } from "redux/slices/searchValueSlice";

export default function MobileHeader() {
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
}
