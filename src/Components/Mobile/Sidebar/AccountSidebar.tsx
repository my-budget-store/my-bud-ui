import { UserEnabledFeatures } from "Components/Shared/UserEnabledFeatures";

export const AccountSidebar = () => (
  <ul className="common-side-menu show-account-side-menu ">
    <UserEnabledFeatures />
  </ul>
);
