import "Styles/Products.css";
import { ArrowRight, ExpandMore } from "@mui/icons-material";

export const Products = () => {
  return (
    <>
      <div className="item-base-row">
        <span className="item-nav-path">
          {/* TODO: Dynamically update this section */}
          <a href="/" className=" place-well page-nav-link">
            Mobiles
          </a>
          <span>
            <ArrowRight className="svg-align" />
          </span>
          <a href="/" className="page-nav-link">
            Google Pixel
          </a>
        </span>
        <span className="horizontal-filter-span">
          <span className="place-well">
            Price
            <ExpandMore className="svg-align" />
          </span>
          <span className="place-well">
            Rating
            <ExpandMore className="svg-align" />
          </span>
          <span className="place-well">
            Popularity
            <ExpandMore className="svg-align" />
          </span>
        </span>
      </div>
      <div className="vertical-filter-span">
        <div className="place-well">
          Brands
          <ul className="filter-ul">
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
        <div className="place-well">
          <label>Price Range</label>
          <ul className="filter-ul">
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
        <div className="place-well">
          Screen Size
          <ul className="filter-ul">
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
        <div className="place-well">
          Storage
          <ul className="filter-ul">
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
