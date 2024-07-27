import React, { useEffect, useState, useContext } from 'react';
import cookies from "js-cookie";
import axios from 'axios';
import "./payment.css";
import { AppContext } from '../../Context/ParentContext';
import logo from "../../Assets/Logo.png"

const Payment = () => {
  const { user } = useContext(AppContext);
  const productId = cookies.get("productId");
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const checkouthandler = async (amount, description) => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      return;
    }

    try {
      const { data: { key } } = await axios.get("https://s53-vishnupreetham-my-tradition.onrender.com/api/getkey");
      const { data: { order } } = await axios.post("https://s53-vishnupreetham-my-tradition.onrender.com/checkout", { amount });

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "My Tradition",
        description: `${description}`,
        image: `{${logo}}`,
        order_id: order.id,
        callback_url:"https://s53-vishnupreetham-my-tradition.onrender.com/paymentverification",
        profile: {
          name: `${user.name}`,
          email: `${user.email}`,
          contact: "1234567890"
        },
        notes: {
          "address": "User Address"
        },
        theme: {
          "color": "#3399cc"
        }
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error(error);
    }
  };

  const getProduct = async () => {
    try {
      const model = cookies.get("model");
      const { data } = await axios.get(`https://s53-vishnupreetham-my-tradition.onrender.com/getOneProduct/${model}/${productId}`);
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <div className="productBox">
        <img src={product.img} alt="" />
        <div className="productDetail">
          <h2>{product.Description}</h2>
          <div className="pricing">
            <p className='price'>₹ Price-{product.price}</p>
            <p className='offer'>20% OFF&nbsp;<strong> ₹ {product.price - (product.price * 20 / 100)}</strong></p>
          </div>
          <h1>Product Quantity</h1>
          <div className="counter">
            <button onClick={decrementCount} className="counter-button">-</button>
            <span className="counter-count">{count}</span>
            <button onClick={incrementCount} className="counter-button">+</button>
          </div>
          <button onClick={() => { checkouthandler(count*(product.price - (product.price * 20 / 100)), product.description) }}>Payment</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
