import { ExpandMore } from "@mui/icons-material";
import naf1 from "assets/naf1.jpg";
import naf2 from "assets/naf2.jpg";
import "styles/orders.css";

export default function Orders() {
  return (
    <>
      <h1> Your Orders</h1>
      <div className="filter-row">
        <div className="horizontal-filter dropdown">
          Year
          <ExpandMore />
          <ul className="ul dropdown-container float-right">
            <li>2023</li>
            <li>2022</li>
            <li>2021</li>
          </ul>
        </div>
      </div>
      <ul>
        <li className="order-list">
          <div>
            <span className="order-details">
              <img src={naf1} alt="" />
            </span>
            <span className="order-details">
              Description of Order 1
              <div>
                <span>Price </span>
                <span>Quantity</span>
                <span>Actions</span>
              </div>
            </span>
          </div>
        </li>
        <li className="order-list">
          <div>
            <span className="order-details">
              <img src={naf2} alt="" />
            </span>
            <span className="order-details">
              Description of Order 2
              <div>
                <span>Price </span>
                <span>Quantity</span>
                <span>Actions</span>
              </div>
            </span>
          </div>
        </li>
      </ul>
    </>
  );
}
