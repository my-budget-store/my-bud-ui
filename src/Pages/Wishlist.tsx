import "styles/wishlist.css";
import pixel4a from "assets/images/pixel_4a.jpg";

export default function Wishlist() {
  return (
    <>
      <h1> Your Wishlist</h1>
      <div className="flex-c-w">
        <span className="card">
          <img src={pixel4a} alt="" />
          Pixel 4a
        </span>
      </div>
    </>
  );
}
