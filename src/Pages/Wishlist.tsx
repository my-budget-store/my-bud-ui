import "styles/wishlist.css";
import pixel4a from "assets/pixel_4a.jpg";

export default function Wishlist() {
  return (
    <>
      <h1> Your Wishlist</h1>
      <div className="wishlist-container">
        <span className="card">
          <img src={pixel4a} alt="" />
          Pixel 4a
        </span>
      </div>
    </>
  );
}
