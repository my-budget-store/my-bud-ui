import { ArrowRight, ExpandMore } from "@mui/icons-material";
import "styles/products.css";
import "styles/index.css";
import pixel4a from "assets/pixel_4a.jpg";

export default function Products() {
  return (
    <>
      <div className="filter-row">
        {/* TODO: Dynamically update this section */}
        <span className="product-category">
          <a href="/" className="page-nav-link large-label">
            Mobiles
          </a>
          <ArrowRight />
          <a href="/" className="page-nav-link large-label">
            Google Pixel
          </a>
        </span>
        <span className="spacer" />
        <span className="horizontal-filter">
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
      <div className="container">
        <span className="vertical-filter">
          <label className="large-label">Brands</label>
          <ul>
            <li>
              <input type="checkbox" />
              Apple
            </li>
            <li>
              <input type="checkbox" />
              Samsung
            </li>
            <li>
              <input type="checkbox" />
              Google Pixel
            </li>
            <li>
              <input type="checkbox" />
              One Plus
            </li>
            <li>
              <input type="checkbox" />
              MI
            </li>
          </ul>
          <label className="large-label">Price Range</label>
          <ul>
            <li>
              <input type="checkbox" />0 - 10,000
            </li>
            <li>
              <input type="checkbox" />
              10,000 - 15,000
            </li>
            <li>
              <input type="checkbox" />
              15,000 - 20,000
            </li>
            <li>
              <input type="checkbox" />
              20,000 - 25,000
            </li>
            <li>
              <input type="checkbox" />
              25,000 or more
            </li>
          </ul>
          <label className="large-label">Screen Size</label>
          <ul>
            <li>
              <input type="checkbox" />
              5-5.5 inches
            </li>
            <li>
              <input type="checkbox" />
              5.5-6 inches
            </li>
            <li>
              <input type="checkbox" />
              6+ inches
            </li>
          </ul>
          <label className="large-label">Storage</label>
          <ul>
            <li>
              <input type="checkbox" />
              64 GB
            </li>
            <li>
              <input type="checkbox" />
              128 GB
            </li>
            <li>
              <input type="checkbox" />
              256 GB
            </li>
          </ul>
        </span>
        <span className="card-container">
          <span className="card">
            <img src={pixel4a} alt="" />
            Pixel 4a
          </span>
          <span className="card">
            <img src={pixel4a} alt="" />
            Pixel 4a
          </span>
          <span className="card">
            <img src={pixel4a} alt="" />
            Pixel 4a
          </span>
          <span className="card">
            <img src={pixel4a} alt="" />
            Pixel 4a
          </span>
          <span className="card">
            <img src={pixel4a} alt="" />
            Pixel 4a
          </span>
          <span className="card">Pixel 4a 5G</span>
          <span className="card">Pixel 5a</span>
          <span className="card">Pixel 5</span>
          <span className="card">Pixel 6a</span>
          <span className="card">Pixel 6</span>
          <span className="card">Pixel 7a</span>
          <span className="card">Pixel 7</span>
        </span>
      </div>
    </>
  );
}
