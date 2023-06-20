import { UserEnabledFeatures } from "Components/Shared/UserEnabledFeatures";
import CommonHeader from "./CommonHeader";
import { LoginHeader } from "../Shared/LoginHeader";
import { useAuth } from "react-oidc-context";

const Header = () => {
  const auth = useAuth();
  let header;
  if (auth.isAuthenticated) {
    header = (
      <>
        <UserEnabledFeatures />
      </>
    );
  } else {
    header = <LoginHeader />;
  }
  return (
    <header>
      <CommonHeader />
      {header}
    </header>
  );
};

export default Header;
