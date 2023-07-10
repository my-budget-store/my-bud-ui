import { ExpandMore } from "@mui/icons-material";
import { Order } from "interfaces/Order";
import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router";
import { parseImageUrl } from "services/helpers";
import { orderService } from "services/orderService";
import { productService } from "services/productService";
import "styles/orders.css";

export default function Orders() {
  const auth = useAuth();

  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      const fetchCartData = async () => {
        const fetchedOrders: Order[] = await orderService.getOrders(
          auth.user?.access_token
        );

        const productIds = fetchedOrders.flatMap((order) =>
          order.orderItems.map((orderItem) => orderItem.productId)
        );

        const productPromises: Promise<Product>[] = productIds.map(
          (productId) => productService.getProductById(productId)
        );

        try {
          const productsData: Product[] = await Promise.all(productPromises);
          setProducts(productsData);
        } catch (error) {
          console.error("Error retrieving products:", error);
          setProducts([]);
        }
        setOrders(fetchedOrders);
      };
      fetchCartData();
    };
  }, []);

  return (
    <>
      <h1> Your Orders</h1>
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
        {orders.map((order) => (
          <li className="order-list" key={order.orderId}>
            <div>
              {order.orderItems.map((orderItem) => {
                const product = products.find(
                  (p) => p.productId === orderItem.productId
                );
                if (!product) return null;

                const imageUrl = parseImageUrl(product.image);
                return (
                  <>
                    <span className="order-details" key={orderItem.orderItemId}>
                      <img src={imageUrl} alt="" className="img-w-200" />
                    </span>
                    <span className="order-details">
                      Description of Order {order.orderId}
                      <div>
                        <span>Price: {product.price}</span>
                        <span>Quantity: {orderItem.quantity}</span>
                        <span>Actions</span>
                      </div>
                    </span>
                  </>
                );
              })}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
