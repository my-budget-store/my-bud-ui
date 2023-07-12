import { ExpandMore } from "@mui/icons-material";
import { CartItem } from "interfaces/CartItem";
import { OrderItem } from "interfaces/Order";
import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router";
import { cartService } from "services/cartService";
import { parseImageUrl } from "services/helpers";
import { orderService } from "services/orderService";
import { productService } from "services/productService";
import "styles/cart.css";

export default function Cart() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredCartItemsToBeOrdered, setfilteredCartItemsToBeOrdered] =
    useState<OrderItem[]>([]);

  const PlaceOrderHandler = async () => {
    const isSuccess = await orderService.createOrder(
      auth.user?.access_token,
      filteredCartItemsToBeOrdered
    );
    if (isSuccess) {
      navigate("/Orders");
    }
  };

  useEffect(() => {
    return () => {
      const fetchCartData = async () => {
        try {
          const cartItemsData = await cartService.getCartItems(
            auth.user?.access_token
          );
          setCartItems(cartItemsData);

          const filteredCartItemsToOrder = cartItemsData
            .filter((item: CartItem) => !item.saveForLater)
            .map((item: CartItem) => {
              const createOrderModel: OrderItem = {
                productId: item.productId,
                orderItemId: item.cartId,
                quantity: item.quantity,
              };
              return createOrderModel;
            });
          setfilteredCartItemsToBeOrdered(filteredCartItemsToOrder);
          
          const productIds = cartItemsData.map(
            (item: CartItem) => item.productId
          );

          const productsData: Product[] = await Promise.all(
            productIds.map((id: number) => productService.getProductById(id))
          );
          setProducts(productsData);
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      };

      fetchCartData();
    };
  }, []);
  return (
    <>
      <h1>Cart Page</h1>
      <div className="filter-row">
        <span className="spacer" />
        <span className="dropdown">
          Year
          <ExpandMore />
          <div className="year-container common-container">
            <div className="dropdown-content">2023</div>
            <div className="dropdown-content">2022</div>
            <div className="dropdown-content">2021</div>
          </div>
        </span>
      </div>
      <ul>
        {cartItems.map((cartItem, index) => {
          const product = products.find(
            (p) => p.productId === cartItem.productId
          );
          if (product != null || product != undefined) {
            const imageUrl = parseImageUrl(product.image);
            return (
              <li className="cart-list" key={index}>
                <div>
                  <span className="cart-details">
                    <img src={imageUrl} className="cart-product-image" alt="" />
                  </span>
                  <span className="cart-details">
                    <span>{product?.name}</span>
                    <div className="cart-product-details">
                      <span>Price: {product?.price}</span>
                      <span>
                        Quantity
                        <select>
                          <option value="1">{cartItem?.quantity}</option>
                        </select>
                      </span>
                      <span>Actions</span>
                      <input
                        type="button"
                        value="Place Order"
                        onClick={PlaceOrderHandler}
                      />
                    </div>
                  </span>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
