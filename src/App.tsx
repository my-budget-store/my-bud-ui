import { Routes, Route } from "react-router";
import { Home } from "Pages/Home";
import { Products } from "Pages/Products";
import { Wishlist } from "Pages/Wishlist";
import { Orders } from "Pages/Orders";
import { Cart } from "Pages/Cart";
import { Account } from "Pages/Account";
import { Login } from "Components/Login";
import { Logout } from "Components/Logout";
import { Error } from "Components/Error";
import Header from "Components/Header";

export const App = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};
