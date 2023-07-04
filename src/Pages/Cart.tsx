import { ExpandMore } from "@mui/icons-material";
import naf1 from "assets/images/naf1.jpg";
import naf2 from "assets/images/naf2.jpg";
import "styles/cart.css";

export default function Cart() {
  return (
    <>
      <h1> Your Cart</h1>
      <div className="filter-row">
        <div className="flex-c-w dropdown">
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
        <li className="cart-list">
          <div>
            <span className="cart-details">
              <img src={naf1} alt="" />
            </span>
            <span className="cart-details">
              <span>Description of item 1</span>
              <div className="cart-product-details">
                <span>Price : 10,000</span>
                <span>
                  Quantity
                  <select>
                    <option value="1">1</option>
                  </select>
                </span>
                <span>Actions</span>
              </div>
            </span>
          </div>
        </li>
        <li className="cart-list">
          <div>
            <span className="cart-details">
              <img src={naf2} alt="" />
            </span>
            <span className="cart-details">
              <span>Description of item 2</span>
              <div className="cart-product-details">
                <span>Price : 5,000</span>
                <span>
                  Quantity
                  <select>
                    <option value="1">1</option>
                  </select>
                </span>
                <span>Actions</span>
              </div>
            </span>
          </div>
        </li>
      </ul>
    </>
  );
}
