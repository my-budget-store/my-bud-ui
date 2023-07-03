import {
  Favorite as FavIcon,
  ShoppingCart as CartIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function AccountMenu() {
  return (
    <>
      <span>
        <Link to="/Wishlist">
          <FavIcon />
          Wishlist
        </Link>
      </span>
      <span>
        <Link to="/Cart">
          <CartIcon />
          Cart
        </Link>
      </span>
    </>
  );
}
