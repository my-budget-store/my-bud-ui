import {
  Favorite as FavIcon,
  ShoppingCart as CartIcon,
} from "@mui/icons-material";

export default function AccountMenu() {
  return (
    <>
      <span>
        <a href="/wishlist">
          <FavIcon />
          Wishlist
        </a>
      </span>
      <span>
        <a href="/cart">
          <CartIcon />
          Cart
        </a>
      </span>
    </>
  );
};
