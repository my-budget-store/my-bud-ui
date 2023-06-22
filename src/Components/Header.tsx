import { useWindowSize } from "hooks/window-size";
import MobileHeader from "components/mobile/MobileHeader";
import DesktopHeader from "components/desktop/DesktopHeader";

export default function Header() {
  return useWindowSize() ? <DesktopHeader /> : <MobileHeader />;
}
