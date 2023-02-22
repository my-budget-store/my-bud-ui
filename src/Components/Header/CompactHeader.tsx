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

  const ShowMenuSideDrawer = (bool: boolean) =>
    setMenuSideDrawerVisibility(bool);

  const clickMenuBarHandler = () => {
    ShowMenuSideDrawer(true);
  };

  const [isAccountSideDrawerVisible, setAccountSideDrawerVisibility] =
    useState(false);

  const ShowAccountSideDrawer = (bool: boolean) =>
    setAccountSideDrawerVisibility(bool);

  const clickAccountBarHandler = () => {
    ShowAccountSideDrawer(true);
  };

  if (isAccountSideDrawerVisible) {
    return (
      <>
        <AccountSidebar />
        <BackDrop ShowAccountSideDrawer={ShowAccountSideDrawer} />
      </>
    );
  }
  if (isMenuSideDrawerVisible) {
    return (
      <>
        <MenuSideBar />
        <BackDrop ShowMenuSideDrawer={ShowMenuSideDrawer} />
      </>
    );
  }
  return (
    <>
      <div className="compactheader">
        <div className="menu-account-toggle">
          <MenuIcon onClick={clickMenuBarHandler} />
        </div>
        <a href="/" className="nav-link">
          MyBud
        </a>
        <div className="spacer" />
        <div className="menu-account-toggle">
          <AccountCircleIcon onClick={clickAccountBarHandler} />
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
