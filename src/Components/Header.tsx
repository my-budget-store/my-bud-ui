import { useLocation } from "react-router-dom";
import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";
import { useWindowSize } from "Store/CustomHooks/useWindowSizeHook";
import MobileHeader from "Components/Mobile/MobileHeader";
import DesktopHeader from "Components/Desktop/DesktopHeader";

const Header = () => {
  const isDesktopMode = useWindowSize();

  const location = useLocation();
  const isLoginPage = location.pathname === "/Login";

  if (isLoginPage) {
    return (
      <header>
        <span>
          <a href="/">
            <AccountCircleIcon />
            MyBud
          </a>
        </span>
      </header>
    );
  }

  return isDesktopMode ? <DesktopHeader /> : <MobileHeader />;
};

export default Header;
