import { UserEnabledFeatures } from "Components/Shared/UserEnabledFeatures";

export const AccountSidebar = () => (
  <header className="common-side-menu show-account-side-menu ">
    <UserEnabledFeatures />
  </header>
);
