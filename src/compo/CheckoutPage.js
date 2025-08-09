// import React, {useEffect, useState} from 'react';
// import '../styles/checkout.css';
// import { useLocation } from 'react-router-dom';
// import PremiumLoader from './PremiumLoader';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const CheckoutPage = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//   const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//     const [formData, setFormData] = useState({
//     email: '',
//     phone: '',
//     country: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     apartment: '',
//     city: '',
//     state: '',
//     pincode: '',
//     payment: '',
//   });
//    const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" }); // clear error
//   };

// const validate = () => {
//   const newErrors = {};

//   if (!formData.email.trim()) newErrors.email = "Email is required";
//   else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";

//   if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
//   else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Invalid phone";

//   if (!formData.country) newErrors.country = "Country is required";
//   if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//   if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//   if (!formData.address.trim()) newErrors.address = "Address is required";
//   if (!formData.city.trim()) newErrors.city = "City is required";
//   if (!formData.state.trim()) newErrors.state = "State is required";
//   if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required";
//   if (!formData.payment) newErrors.payment = "Please select a payment method";

//   setErrors(newErrors);
//   return Object.keys(newErrors).length === 0;
// };

//   //   const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prev) => ({
//   //     ...prev,
//   //     [name]: value,
//   //   }));
//   // };
  
//   useEffect(() => {
//     const stateProduct = location.state?.product;
//     if (stateProduct) {
//       setProduct(stateProduct);
//       sessionStorage.setItem("selectedProduct", JSON.stringify(stateProduct));
//     } else {
//       const storedProduct = sessionStorage.getItem("selectedProduct");
//       if (storedProduct) {
        
//       setProduct(JSON.parse(storedProduct));
//       }
//     }
//   }, [location.state]);
// const handlePlaceOrder = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;
//   // if (!formData.payment) {
//   //   setMessage('Please select a payment method.');
//   //   return;
//   // }

//   // if (!product || !product.id) {
//   //   alert("Product details are missing.");
//   //   return;
//   // }
// const orderData = {
//       userId: '1',
//       products: [
//         {
//           id: product.id,
//           name: product.name,
//           price: product.price,
//           quantity: 1,
//         },
//       ],
//       totalAmount: product.price,
//       customer: {
//         name: formData.name,
//         phone: formData.phone,
//         address: formData.address,
//         city: formData.city,
//         state: formData.state,
//         pincode: formData.pincode,
//         country: formData.country,
//       },
//       paymentType: formData.payment,
//     };
//   // const orderData = {
//   //   userId: formData.userId,
//   //   products: [
//   //     {
//   //       productId: product.id,
//   //       name: product.name,
//   //       price: product.price,
//   //       quantity: 1
//   //     }
//   //   ],
//   //   totalAmount: product.price,
//   //   customer: {
//   //     name: formData.name,
//   //     phone: formData.phone,
//   //     email: formData.email,
//   //     address: formData.address,
//   //     city: formData.city,
//   //     state: formData.state,
//   //     pincode: formData.pincode,
//   //     country: formData.country,
//   //   },
//   //   paymentType: formData.paymentType,
//   //   status: "pending"
//   // };

//   try {
//     const response = await axios.post("https://elyxianback.onrender.com/api/place-order", orderData);
//     if (response.data.success) {
//     navigate('/ordersucess',{
//         state: {
//           name: formData.firstName + formData.lastName,
//            total: product?.price,
//            address:formData.address,
//            state:formData.state,
//            pincode:formData.pincode,
//            country:formData.country,
//            city:formData.city,
//            phonenumber:formData.phone,
//            payment:formData.payment
//         },
//       }); // or any route you want to redirect to

//       // setFormData({}); // optional reset
//     } else {
//       alert("❌ Failed to place order: " + response.data.message);
//     }
//   } catch (error) {
//     console.error("❌ Error placing order:", error);
//     alert("Something went wrong while placing the order.");
//   }
// };


//   return (
//     <div className="shopify-checkout">
//      <div className="checkout-left">
//   <h2>Contact</h2>
//   <div className="form-group">
//     <input type="email" name="email" placeholder="Email address" onChange={handleChange} />
//     {errors.email && <span className="error">{errors.email}</span>}
//   </div>
//   <div className="form-group">
//     <input type="tel" name="phone" placeholder="Phone number" onChange={handleChange} />
//     {errors.phone && <span className="error">{errors.phone}</span>}
//   </div>

//   <h2>Shipping Address</h2>
//   <div className="form-group">
//     <select name="country" onChange={handleChange}>
//       <option value="">Country/Region</option>
//       <option value="India">India</option>
//     </select>
//     {errors.country && <span className="error">{errors.country}</span>}
//   </div>

//   <div className="flex-inputs">
//     <div className="form-group">
//       <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
//       {errors.firstName && <span className="error">{errors.firstName}</span>}
//     </div>
//     <div className="form-group">
//       <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
//       {errors.lastName && <span className="error">{errors.lastName}</span>}
//     </div>
//   </div>

//   <div className="form-group">
//     <input type="text" name="address" placeholder="Address" onChange={handleChange} />
//     {errors.address && <span className="error">{errors.address}</span>}
//   </div>

//   <div className="form-group">
//     <input type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" onChange={handleChange} />
//   </div>

//   <div className="form-group">
//     <input type="text" name="city" placeholder="City" onChange={handleChange} />
//     {errors.city && <span className="error">{errors.city}</span>}
//   </div>

//   <div className="flex-inputs">
//     <div className="form-group">
//       <input type="text" name="state" placeholder="State" onChange={handleChange} />
//       {errors.state && <span className="error">{errors.state}</span>}
//     </div>
//     <div className="form-group">
//       <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} />
//       {errors.pincode && <span className="error">{errors.pincode}</span>}
//     </div>
//   </div>

// <h2 className="section-title">Payment Method</h2>
// <div className="form-group payment-options">
//   <label className="radio-label">
//     <input type="radio" name="payment" value="online" onChange={handleChange} />
//     <span>Online Payment (UPI / Card)</span>
//   </label>
//   <label className="radio-label">
//     <input type="radio" name="payment" value="cod" onChange={handleChange} />
//     <span>Cash on Delivery</span>
//   </label>
//   {errors.payment && <span className="input-error">{errors.payment}</span>}
// </div>


//   <button className="place-order" onClick={handlePlaceOrder} disabled={loading}>
//     {loading ? "Placing Order..." : "Place Order"}
//   </button>
// </div>



//      {!product?<PremiumLoader/>:
// <div className="checkout-right">
//         <div className="order-summary">
//           <h3>Order Summary</h3>
//           <div className="product-item">
//             <img src={product?.images[0]} alt="Product" />
//             <div className="product-details">
//               <p>{product?.name}</p>
//               <span>Qty: 1</span>
//               <p>{product?.price}</p>
//             </div>
//           </div>
//           <hr />
//           <div className="summary-row">
//             <p>Subtotal</p>
//             <p>{product?.price}</p>
//           </div>
//           <div className="summary-row">
//             <p>Shipping</p>
//             <p>Free</p>
//           </div>
//           <div className="summary-row total">
//             <p>Total</p>
//             <p>{product?.price}</p>
//           </div>
//         </div>
//       </div>
//      } 
//     </div>
//   );
// };


// export default CheckoutPage;
import React, { useEffect, useState } from "react";
import "../styles/checkout.css";
import { useLocation, useNavigate } from "react-router-dom";
import PremiumLoader from "./PremiumLoader";
import axios from "axios";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pincode: "",
    payment: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const stateProduct = location.state?.product;
    if (stateProduct) {
      setProduct(stateProduct);
      sessionStorage.setItem("selectedProduct", JSON.stringify(stateProduct));
    } else {
      const storedProduct = sessionStorage.getItem("selectedProduct");
      if (storedProduct) setProduct(JSON.parse(storedProduct));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.phone.trim())
      newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Invalid phone number";

    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required";
    if (!formData.address.trim())
      newErrors.address = "Address is required";
    if (!formData.city.trim())
      newErrors.city = "City is required";
    if (!formData.state.trim())
      newErrors.state = "State is required";
    if (!formData.pincode.trim())
      newErrors.pincode = "Pincode is required";
    if (!formData.payment)
      newErrors.payment = "Please select a payment method";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const orderData = {
        userId: "1",
        products: [
          {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
          },
        ],
        totalAmount: product.price,
        customer: {
          name: formData.firstName + " " + formData.lastName,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          country: formData.country,
          apartment: formData.apartment,
        },
        paymentType: formData.payment,
      };

      const response = await axios.post(
        "https://elyxianback.onrender.com/api/place-order",
        orderData
      );

      if (response.data.success) {
        navigate("/ordersucess", {
          state: {
            name: formData.firstName + " " + formData.lastName,
            total: product?.price,
            address: formData.address,
            state: formData.state,
            pincode: formData.pincode,
            country: formData.country,
            city: formData.city,
            phonenumber: formData.phone,
            payment: formData.payment,
          },
        });
      } else {
        alert("❌ Failed to place order: " + response.data.message);
      }
    } catch (error) {
      alert("Something went wrong while placing the order.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-form-section">
        <h2>Contact Information</h2>
        <form onSubmit={handlePlaceOrder} noValidate>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "input-error-border" : ""}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="10-digit phone number"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "input-error-border" : ""}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          <h2>Shipping Address</h2>

          <div className="form-group">
            <label htmlFor="country">Country/Region</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={errors.country ? "input-error-border" : ""}
            >
              <option value="">Select country</option>
              <option value="India">India</option>
            </select>
            {errors.country && <p className="error-text">{errors.country}</p>}
          </div>

          <div className="flex-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? "input-error-border" : ""}
              />
              {errors.firstName && (
                <p className="error-text">{errors.firstName}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? "input-error-border" : ""}
              />
              {errors.lastName && (
                <p className="error-text">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              name="address"
              placeholder="Street address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? "input-error-border" : ""}
            />
            {errors.address && <p className="error-text">{errors.address}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="apartment">Apartment, suite, etc. (optional)</label>
            <input
              id="apartment"
              type="text"
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
              value={formData.apartment}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className={errors.city ? "input-error-border" : ""}
            />
            {errors.city && <p className="error-text">{errors.city}</p>}
          </div>

          <div className="flex-row">
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                id="state"
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className={errors.state ? "input-error-border" : ""}
              />
              {errors.state && <p className="error-text">{errors.state}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input
                id="pincode"
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className={errors.pincode ? "input-error-border" : ""}
              />
              {errors.pincode && <p className="error-text">{errors.pincode}</p>}
            </div>
          </div>

          <h2>Payment Method</h2>
          <div className="form-group payment-options">
            <label className="radio-label">
              <input
                type="radio"
                name="payment"
                value="online"
                checked={formData.payment === "online"}
                onChange={handleChange}
              />
              Online Payment (UPI / Card)
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={formData.payment === "cod"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>
            {errors.payment && <p className="error-text">{errors.payment}</p>}
          </div>

          <button
            type="submit"
            className="place-order-btn"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </form>
      </div>

      <div className="checkout-summary-section">
        {!product ? (
          <PremiumLoader />
        ) : (
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="product-item">
              <img
                src={product?.images[0]}
                alt={product?.name}
                className="product-image"
              />
              <div className="product-info">
                <p className="product-name">{product?.name}</p>
                <p className="product-qty">Qty: 1</p>
                <p className="product-price">₹{product?.price}</p>
              </div>
            </div>
            <hr />
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{product?.price}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{product?.price}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
