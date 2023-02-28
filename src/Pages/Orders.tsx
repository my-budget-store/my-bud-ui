import { ExpandMore } from "@mui/icons-material";
import naf1 from "assets/naf1.jpg";
import naf2 from "assets/naf2.jpg";

export const Orders = () => {
  return (
    <>
      <h1> Your Orders</h1>
      <div className="filter-row">
        <div className="horizontal-filter dropdown">
          Year
          <ExpandMore/>
          <ul className="ul dropdown-content float-right">
            <li>
              <label>2023</label>
            </li>
            <li>2022</li>
            <li>2021</li>
          </ul>
        </div>
      </div>
      <ul>
        <li className="order-list">
          <div>
            <span className="order-details">
              <img src={naf1} alt=""/>
            </span>
            <span className="order-details">
              <label>Description of Order 1</label>
              <div>
                <span>Price </span>
                <span>Quantity</span>
                <span>Actions</span>
              </div>
            </span>
          </div>
        </li>
        <li className="order-list">
          <span className="order-details">
            <img src={naf2} alt=""/>
          </span>
          <span>
            <label>Description of Order 2</label>
            <div>Price </div>
            <div>Quantity</div>
            <div>Actions</div>
          </span>
        </li>
      </ul>
    </>
  );
};
