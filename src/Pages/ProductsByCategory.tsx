import { useParams } from "react-router-dom";
import { ArrowRight, ExpandMore } from "@mui/icons-material";
import "styles/products.css";
import "styles/index.css";
import { useLoaderData } from "react-router";
import { ProductFiltersEntity } from "interfaces/Filter";
import { parseImageUrl } from "services/helpers";

export const ProductsByCategory = () => {
  const { category } = useParams();
  const [productsData, filtersData] = useLoaderData() as [
    Product[],
    ProductFiltersEntity
  ];

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
              <div key={propertyName}>
                <h3>{propertyName}</h3>
                <ul>
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
          const imageUrl = parseImageUrl(product.image);
          return (
            <span className="card-container" key={product.productId}>
              <span className="card">
                <img src={imageUrl} alt="" />
                {product.name}
              </span>
            </span>
          );
        })}
      </div>
    </>
  );
};
