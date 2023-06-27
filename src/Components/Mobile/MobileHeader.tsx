import { BackDrop } from "components/shared/BackDrop";
import { MenuSideBar } from "components/mobile/MenuSidebar";
import AccountSidebar from "components/mobile/AccountSidebar";
import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import {
  toggleMenuSideDrawer,
  toggleAccountSideDrawer,
} from "redux/slices/sideDrawerSlice";
import { SearchBar } from "../shared/SearchBar";
import "styles/side-bars.css";
import "styles/header.css";
import { Link } from "react-router-dom";

export default function MobileHeader() {
  const dispatch = useDispatch();

  const { isMenuSideDrawerVisible, isAccountSideDrawerVisible } = useSelector(
    (state: RootState) => state.sideDrawer
  );

  if (isMenuSideDrawerVisible) {
    return (
      <>
        <MenuSideBar />
        <BackDrop />
      </>
    );
  }

  if (isAccountSideDrawerVisible) {
    return (
      <>
        <AccountSidebar />
        <BackDrop />
      </>
    );
  }

  return (
    <>
      <header>
        <span className="flex">
          <MenuIcon onClick={() => dispatch(toggleMenuSideDrawer(true))} />
          <Link to="/">MyBud</Link>
        </span>
        <span className="spacer" />
        <span className="flex">
          <AccountCircleIcon
            onClick={() => dispatch(toggleAccountSideDrawer(true))}
          />
        </span>
      </header>
      <SearchBar />
    </>
  );
}


