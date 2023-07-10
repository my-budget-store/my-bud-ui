import { useParams } from "react-router-dom";
import { ExpandMore } from "@mui/icons-material";
import "styles/products.css";
import { useLoaderData, useNavigate } from "react-router";
import { ProductFiltersEntity } from "interfaces/Filter";
import { parseImageUrl } from "services/helpers";

export const ProductsByCategory = () => {
  const { category } = useParams();
  const [productsData, filtersData] = useLoaderData() as [
    Product[],
    ProductFiltersEntity
  ];
  const navigate = useNavigate();
  const ProductImageClickHandler = (selectedProductId: number) => {
    navigate(`/ProductDetails/${selectedProductId}`);
  };

  return (
    <>
      <div className="filter-row">
        <span className="flex-c-w label-xl">{category}</span>
        <span className="spacer" />
        <span className="flex">
          <span className="dropdown">
            Price
            <ExpandMore />
            <div className="price-container common-container">
              <div className="dropdown-content">Low to High</div>
            </div>
          </span>
          <span className="dropdown">
            Rating
            <ExpandMore />
            <div className="rating-container common-container">
              <div className="dropdown-content">Low to High</div>
            </div>
          </span>
          <span className="dropdown">
            Popularity
            <ExpandMore />
            <div className="popularity-container common-container">
              <div className="dropdown-content">Low to High</div>
            </div>
          </span>
        </span>
      </div>
      <div className="flex">
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
                <img
                  src={imageUrl}
                  alt=""
                  onClick={() => ProductImageClickHandler(product.productId)}
                />
                {product.name}
              </span>
            </span>
          );
        })}
      </div>
    </>
  );
};
