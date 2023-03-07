import { Home as HomeIcon, Menu as MenuIcon } from "@mui/icons-material";

export const MenuSideBar = () => {
  return (
    <header className="common-side-menu show-side-menu">
      <span>
        <a href="/Home">
          <HomeIcon/>
          MyBud
        </a>
      </span>
      <span>
        <a href="/Products">
          <MenuIcon/>
          Products
        </a>
      </span>
    </header>
  );
};
