import { useLoaderData } from "react-router";
import "styles/productDetails.css";
import { cartService } from "services/cartService";
import { createCartItem } from "interfaces/CartItem";
import { useAuth } from "react-oidc-context";

export const ProductDetails = () => {
  const product = useLoaderData() as Product;
  
  const auth = useAuth();

  const addToCartHandler = async () => {
    const createCartItem: createCartItem = {
      productId: product.productId,
      quantity: 1,
    };

    await cartService.createCartItem(auth.user?.access_token, createCartItem);
  };

  return (
    <>
      <h1>
        {/* <h1>{product.name}</h1> */}
        Google Pixel 4A
      </h1>
      <div className="flex">
        <span className="images-panel">
          <div>
            {/* <img src={pixel4a} alt="" className="product-images" /> */}
          </div>
          <div>
            {/* <img src={pixel4a} alt="" className="thumbnails" />
            <img src={pixel4a} alt="" className="thumbnails" /> */}
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
            <input
              type="button"
              value="Add to Cart"
              onClick={addToCartHandler}
            />
          </div>
        </span>
      </div>
    </>
  );
};
