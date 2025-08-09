import React from "react";
import "../styles/OrderSucess.css";
import { useLocation, useNavigate } from "react-router-dom";

const OrderSuccess = ({ order }) => {
    const location = useLocation();
    const navigate = useNavigate()
    const GoTOproduct = () =>{
navigate('/')
    }
  const { name, total, address,
           state,
           pincode,
           country,
           city,
           phonenumber,
           payment } = location.state || {};
  return (
    <div className="order-success">
      <div className="order-card">
        <h1>✅ Thank you for your order!</h1>
        <p>Your order has been placed successfully.</p>

        <div className="order-section">
          <h2>Order Summary</h2>
          {/* <p><strong>Order ID:</strong> </p> */}
          <p><strong>Total:{total}</strong> ₹</p>
          <p><strong>Payment:{payment}</strong> </p>
        </div>

        <div className="order-section">
          <h2>Shipping Details</h2>
          <p>{name}</p>
          <p>{address}, {city}</p>
          <p>{state}, {pincode}</p>
          <p>{country}</p>
          <p>📞 {phonenumber}</p>
        </div>

        <button className="continue-btn" onClick={GoTOproduct}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default OrderSuccess;
