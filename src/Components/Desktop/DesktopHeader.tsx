import { UserMenuHeader } from "components/shared/UserMenuHeader";
import CommonHeader from "components/desktop/PublicHeader";
import { LoginElement } from "components/shared/LoginElement";
import { useAuth } from "react-oidc-context";

const Header = () => {
  const auth = useAuth();
  let header;
  
  if (auth.isAuthenticated) {
    header = <UserMenuHeader />;
  } else {
    header = <LoginElement />;
  }
  return (
    <header>
      <CommonHeader />
      {header}
    </header>
  );
};

export default Header;
