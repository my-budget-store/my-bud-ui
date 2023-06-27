import { Home as HomeIcon, Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const MenuSideBar = () => {
  return (
    <header className="common-side-menu show-side-menu">
      <span>
        <Link to="/Home">
          <HomeIcon/>
          MyBud
        </Link>
      </span>
      <span>
        <Link to="/Products">
          <MenuIcon/>
          Products
        </Link>
      </span>
    </header>
  );
};
