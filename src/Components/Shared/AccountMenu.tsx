import {
  Favorite as FavIcon,
  ShoppingCart as CartIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function AccountMenu() {
  return (
    <>
      <span>
        <Link to="/wishlist">
          <FavIcon />
          Wishlist
        </Link>
      </span>
      <span>
        <Link to="/cart">
          <CartIcon />
          Cart
        </Link>
      </span>
    </>
  );
}
