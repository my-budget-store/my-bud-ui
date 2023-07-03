import { useParams } from "react-router-dom";
import { ArrowRight, ExpandMore } from "@mui/icons-material";
import "styles/products.css";
import "styles/index.css";
import pixel4a from "assets/pixel_4a.jpg";
import { useLoaderData } from "react-router";
import { ProductFiltersEntity } from "interfaces/Filter";

export const ProductsByCategory = () => {
  const { category } = useParams();
  const [productsData, filtersData] = useLoaderData() as [
    Product[],
    ProductFiltersEntity
  ];

  if (!filtersData || !filtersData.productFiltersData) {
    return null;
  }

  return (
    <>
      <div className="filter-row">
        <span className="flex-c-w label-xl">{category}</span>
        <span className="spacer" />
        <span className="flex-c-w">
          <span className="price-dropdown">
            Price
            <ExpandMore />
            <div className="common-hl-filter price-dropdown-container right">
              <div>Low to High</div>
            </div>
          </span>
          <span className="rating-dropdown">
            Rating
            <ExpandMore />
            <div className="common-hl-filter rating-dropdown-container right">
              <div>Low to High</div>
            </div>
          </span>
          <span className="popularity-dropdown">
            Popularity
            <ExpandMore />
            <div className="common-hl-filter popularity-dropdown-container right">
              <div>Low to High</div>
            </div>
          </span>
        </span>
      </div>
      <div className="container">
        <div className="filter-v">
          {Object.entries(filtersData.productFiltersData).map(
            ([propertyName, values]) => (
              <div className="filter-group" key={propertyName}>
                <h3 className="filter-heading">{propertyName}</h3>
                <ul className="filter-list">
                  {values.map((value: string) => (
                    <li key={value}>
                      <input type="checkbox" id={value} />
                      <label>{value}</label>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
        {productsData.map((product: Product) => {
          return (
            <div className="card-container">
              <span className="card">
                <img src={pixel4a} alt="" />
                {product.name}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};
