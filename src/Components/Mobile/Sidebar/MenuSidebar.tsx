import { Home as HomeIcon, Menu as MenuIcon } from "@mui/icons-material";

export const MenuSideBar = () => {
  return (
    <ul className="common-side-menu show-side-menu">
      <li>
        <a href="/Home">
          <HomeIcon/>
          MyBud
        </a>
      </li>
      <li>
        <a href="/categories">
          <MenuIcon/>
          Categories
        </a>
      </li>
    </ul>
  );
};
