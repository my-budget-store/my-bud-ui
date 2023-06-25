import { useWindowSize } from "hooks/window-size";
import MobileHeader from "components/mobile/MobileHeader";
import DesktopHeader from "components/desktop/DesktopHeader";
import { Outlet } from "react-router";

export default function Header() {
  return (
    <>
      {useWindowSize() ? <DesktopHeader /> : <MobileHeader />}
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}
