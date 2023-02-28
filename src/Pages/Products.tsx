import { ArrowRight, ExpandMore } from "@mui/icons-material";
import "Styles/products.css";

export const Products = () => {
  return (
    <>
      <div className="filter-row">
        <span className="item-nav-path">
          {/* TODO: Dynamically update this section */}
          <a href="/" className="page-nav-link">
           <label className="large-label">Mobiles</label>
          </a>
          <span>
            <ArrowRight/>
          </span>
          <a href="/" className="page-nav-link">
            <label className="large-label">Google Pixel</label>
          </a>
        </span>
        <span className="horizontal-filter">
          <span>
            Price
            <ExpandMore/>
          </span>
          <span>
            Rating
            <ExpandMore/>
          </span>
          <span>
            Popularity
            <ExpandMore/>
          </span>
        </span>
      </div>
      <div className="vertical-filter">
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
      </div>
      <div className="card-container">
        <div className="card">Pixel 4a</div>
        <div className="card">Pixel 4a 5G</div>
        <div className="card">Pixel 5a</div>
        <div className="card">Pixel 5</div>
        <div className="card">Pixel 6a</div>
        <div className="card">Pixel 6</div>
        <div className="card">Pixel 7a</div>
        <div className="card">Pixel 7</div>
      </div>
    </>
  );
};
