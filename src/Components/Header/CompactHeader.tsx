import { useState } from "react";
import { BackDrop } from "Components/UI/BackDrop";
import { MenuSideBar } from "Components/MenuSidebar/MenuSidebar";
import { AccountSidebar } from "Components/AccountSidebar/AccountSidebar";
import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import "Components/Header/Header.css";

export const CompactHeader = (props: any) => {
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
      <div className="compactheader">
        <div className="menu-account-toggle">
          <MenuIcon onClick={() => ToggleMenuSideDrawer(true)} />
        </div>
        <a href="/" className="nav-link">
          MyBud
        </a>
        <div className="spacer" />
        <div className="menu-account-toggle">
          <AccountCircleIcon onClick={() => ToggleAccountSideDrawer(true)} />
        </div>
      </div>
      <div className="compactheader">
        <input
          className="search-bar-style"
          onChange={props.SearchValueChangeHandler}
          value={props.searchValue}
        />
      </div>
    </>
  );
};
