import { useState } from "react";
import { BackDrop } from "Components/Shared/BackDrop";
import { MenuSideBar } from "Components/Mobile/Sidebar/MenuSidebar";
import { AccountSidebar } from "Components/Mobile/Sidebar/AccountSidebar";
import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import "Styles/side-bars.css";
import "Styles/header.css";

export const MobileHeader = (props: any) => {
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
          <a href="/">
            MyBud
          </a>
        </span>
        <span className="spacer" />
        <span className="menu-account-toggle">
          <AccountCircleIcon onClick={() => ToggleAccountSideDrawer(true)} />
        </span>
      </header>
      <header>
        <input
          className="search-bar-style"
          onChange={props.SearchValueChangeHandler}
          value={props.searchValue}
        />
      </header>
    </>
  );
};
