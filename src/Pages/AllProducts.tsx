import { ArrowRight, ExpandMore } from "@mui/icons-material";
import "styles/products.css";
import "styles/index.css";

export default function Products() {
  return (
    <>
      <div className="filter-row">
        <span className="page-nav">
          <a href="/" className="page-nav label-l">
            Mobiles
          </a>
          <ArrowRight />
          <a href="/" className="page-nav label-l">
            Google Pixel
          </a>
        </span>
        <span className="spacer" />
        <span className="flex-c-w">
          <span>
            Price
            <ExpandMore />
          </span>
          <span>
            Rating
            <ExpandMore />
          </span>
          <span className="popularity-dropdown">
            Popularity
            <ExpandMore />
            <div className="popularity-dropdown-container right">
              <div>Low to High</div>
            </div>
          </span>
        </span>
      </div>
      <div className="flex">
        <span className="card-container">
          <span className="card">
            {/* <img src={pixel4a} alt="" /> */}
            Pixel 4a
          </span>
        </span>
      </div>
    </>
  );
}
