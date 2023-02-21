import { Home as HomeIcon, Menu as MenuIcon } from "@mui/icons-material";
import "Components/MenuSidebar/MenuSidebar.css";

export const MenuSideBar = () => {
  return (
    <div className="common-side-menu show-side-menu">
      <ul className="ul-vertical">
        <li className="header-li">
          <a href="/" className="nav-link">
            <HomeIcon className="icons-size" />
            MyBud
          </a>
        </li>
        <li className="header-li">
          <a href="/categories" className="nav-link">
            <MenuIcon className="icons-size" />
            Categories
          </a>
        </li>
      </ul>
    </div>
  );
};
