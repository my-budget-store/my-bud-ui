import MobileHeader from "components/mobile/MobileHeader";
import DesktopHeader from "components/desktop/DesktopHeader";
import { Outlet } from "react-router";

export default function Header() {
  return (
    <>
      <div>
        <div className="desktop-header">
          <DesktopHeader />
        </div>
        <div className="mobile-header">
          <MobileHeader />
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}
