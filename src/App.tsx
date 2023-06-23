import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Products from "pages/Products";
import Wishlist from "pages/Wishlist";
import Orders from "pages/Orders";
import Cart from "pages/Cart";
import Account from "pages/Account";
import Error from "components/Error";
import Header from "components/Header";

export default function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}
