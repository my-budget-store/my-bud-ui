import { useLocation } from "react-router-dom";
import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";
import { useWindowSize } from "hooks/window-size";
import MobileHeader from "components/mobile/MobileHeader";
import DesktopHeader from "components/desktop/DesktopHeader";

export default function Header() {
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
}
