import { useLoaderData } from "react-router";
import "styles/productDetails.css";
import pixel4a from "assets/images/pixel_4a.jpg";

export const ProductDetails = () => {
  const product = useLoaderData() as Product;

  return (
    <>
      <h1>
        {/* <h1>{product.name}</h1> */}
        Google Pixel 4A
      </h1>
      <div className="flex">
        <span className="images-panel">
          <div>
            <img src={pixel4a} alt="" className="product-images" />
          </div>
          <div>
            <img src={pixel4a} alt="" className="thumbnails" />
            <img src={pixel4a} alt="" className="thumbnails" />
          </div>
        </span>
        <span className="details-panel">
          <ul className="product-choices">
            <li className="choice">White</li>
            <li className="choice">Black</li>
            <li className="choice">Blue</li>
          </ul>
          Price: 1000
          <div>
            <input type="submit" value="Add to Cart" />
          </div>
        </span>
      </div>
    </>
  );
};
