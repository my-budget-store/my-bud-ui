import { Home as HomeIcon, Menu as MenuIcon } from "@mui/icons-material";

export const MenuSideBar = () => {
  return (
    <ul className="common-side-menu show-side-menu">
      <li>
        <a href="/" className="nav-link">
          <HomeIcon className="icons-size" />
          MyBud
        </a>
      </li>
      <li>
        <a href="/categories" className="nav-link">
          <MenuIcon className="icons-size" />
          Categories
        </a>
      </li>
    </ul>
  );
};
