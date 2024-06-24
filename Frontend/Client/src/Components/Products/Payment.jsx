import React, { useEffect, useState } from 'react'
import cookies from "js-cookie"
import axios from 'axios';
import "./payment.css"
const Payment = () => {
    const productId = cookies.get("productId")
    // const Model=cookies.get("model")
    const [product, setProduct] = useState({});
    const [count, setCount] = useState(1);

    // Function to handle incrementing the count
    const incrementCount = () => {
        setCount(count + 1);
    };

    // Function to handle decrementing the count
    const decrementCount = () => {
        // Ensure the count does not go below 1
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const getProduct = async () => {
        try {
            const model = cookies.get("model");
            const products = await axios.get(`http://localhost:3000/getOneProduct/${model}/${productId}`)
            setProduct(products.data)
            // console.log(products.data.product_details.description)
            // console.log(product.product_details.description);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProduct()
    })
    return (
        <div>
            <div className="productBox">
                <img src={product.img} alt="" />
                <div className="productDetail">
                    <h2>{product.Description}</h2>
                    <div className="pricing">
                        <p className='price'>₹ Price-{product.price}</p>
                        <p className='offer'>20% OFF&nbsp;<strong> ₹ {product.price - (product.price * 20 / 100)}</strong> </p>
                    </div>
                    <h1>Product Quantity</h1>
                    <div className="counter">
                        <button onClick={decrementCount} className="counter-button">
                            -
                        </button>
                        <span className="counter-count">{count}</span>
                        <button onClick={incrementCount} className="counter-button">
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
