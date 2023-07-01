import "styles/home.css";
import pixel4a from "assets/pixel_4a.jpg";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <span className="card">
          <img src={pixel4a} alt="" />
          Pixel 4a
        </span>
      </div>
    </>
  );
}
