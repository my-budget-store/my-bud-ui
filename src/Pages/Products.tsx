import { ArrowRight, ExpandMore } from "@mui/icons-material";
import "styles/products.css";
import "styles/index.css";
import pixel4a from "assets/pixel_4a.jpg";
import { ProductFilters } from "components/desktop/ProductFilters";
import { useLoaderData } from "react-router";

export default function Products() {
  return (
    <>
      <div className="filter-row">
        {/* TODO: Dynamically update this section */}
        <span className="product-category">
          <a href="/" className="page-nav-link label-l">
            Mobiles
          </a>
          <ArrowRight />
          <a href="/" className="page-nav-link label-l">
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
        <ProductFilters />
      </div>
      <div className="container">
        <span className="card-container">
          <span className="card">
            <img src={pixel4a} alt="" />
            Pixel 4a
          </span>
        </span>
      </div>
    </>
  );
}
