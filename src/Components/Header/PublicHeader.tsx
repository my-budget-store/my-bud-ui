import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
  Login as LoginIcon,
} from "@mui/icons-material";
import "Components/Header/Header.css";

export const PublicHeader = () => (
  <header className="header">
    <ul className="ul">
      <li>
        <a href="/products" className="nav-link">
          <AccountCircleIcon className="icons-size" />
          MyBud
        </a>
      </li>
      <li>
        <a href="/products" className="nav-link">
          <MenuIcon className="icons-size" />
          Products
        </a>
        <div className="dropdown-content">
          <a href="/link1">Link 1</a>
          <a href="/link1">Link 2</a>
          <a href="/link1">Link 3</a>
        </div>
      </li>
      <li className="spacer" />
      <li>
        <a href="/Login" className="nav-link">
          <LoginIcon className="icons-size" />
          Sign In
        </a>
      </li>
    </ul>
  </header>
);
