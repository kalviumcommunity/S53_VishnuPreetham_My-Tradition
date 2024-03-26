import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from './../../Context/ParentContext';
import productdata from "../StatesLink/Productdata.json";
import { useAuth0 } from "@auth0/auth0-react";

import "./Product.css"

const Products = () => {
    const { user, isAuthenticated} = useAuth0();
    const { newdata } = useContext(AppContext,productdescription);
    const [storedData, setStoredData] = useState(null);
    const checkouthandler =async(amount)=>{
        const {data:{key}}=await axios.get("https://s53-vishnupreetham-my-tradition.onrender.com/api/getkey")
        const {data:{order}}=await axios.post("https://s53-vishnupreetham-my-tradition.onrender.com/checkout",{amount})
        console.log(window);
        const options ={
          key,
          amount:order.amount,
          currency:"INR",
          name:"My-Tradition",
          description:`${productdescription}`,
          image:user.picture,
          order_id:order.id,
          callback_url:"https://s53-vishnupreetham-my-tradition.onrender.com/paymentverification",
          prefill:{
            name:user.name,
            email:user.email,
            contact:"1234567890",
          },
          notes:{
            "address":"razorapy official"
          },
          theme:{
            "color":"#3399cc"
          }
        };
        const razor = new window.Razorpay(options);
        razor.open();
      }

    useEffect(() => {
        localStorage.setItem('myData', JSON.stringify(newdata));
    }, [newdata]);

    useEffect(() => {
        const storedData = localStorage.getItem('myData');
        if (storedData) {
            setStoredData(JSON.parse(storedData));
        }
    }, []);
    return (
        <div>
            {storedData && storedData.events.TeluguWedding.map(e => (
                <div key={e.event_name} className="product-card">
                    <div className="Imgcard">
                    <img src={e.img} alt={e.imgDescription} className="product-image" />
                    <div className="button-container">
                            <button className="buy-button" onClick={()=>{checkouthandler(e.amount,e.imgDescription)}}>Buy</button>
                            <button className="add-to-cart-button">Add to Cart</button>
                        </div>
                    </div>
                    <div className="product-details">
                        <h3 className="product-name">{e.event_name}</h3>
                        <p className="product-state">State: {e.state}</p>
                        <p className="product-tradition">Tradition: {e.tradition}</p>
                        <p className="product-cost">Cost: ₹{e.cost}</p>
                        <p className="product-stock">Stock: {e.stock}</p>
                        <p className="product-description">{e.imgDescription}</p>
                        
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;
