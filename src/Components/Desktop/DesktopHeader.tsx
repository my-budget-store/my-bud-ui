import { UserEnabledFeatures } from "Components/Shared/UserEnabledFeatures";
import React, { useContext } from "react";
import CommonHeader from "./CommonHeader";
import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";
import { AuthContext } from "Store/ContextProviders/AuthContext";
import { LoginHeader } from "../Shared/LoginHeader";

const Header = () => {
  const auth = useContext(AuthContext);
  let header;
  if (auth.isUserLoggedIn) {
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
