import "styles/home.css";
import pixel4a from "assets/images/pixel_4a.jpg";

export default function Home() {
  return (
    <>
      <h1>
        Newly Launched
      </h1>
      <div>
        <span className="card">
          <img src={pixel4a} alt="" />
          Pixel 4a
        </span>
      </div>
    </>
  );
}
