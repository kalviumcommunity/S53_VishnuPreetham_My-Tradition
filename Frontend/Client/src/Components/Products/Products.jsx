import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from './../../Context/ParentContext';
import productdata from "../StatesLink/Productdata.json";
import "./Product.css"

const Products = () => {
    const { newdata } = useContext(AppContext);
    const [storedData, setStoredData] = useState(null);

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
                            <button className="buy-button">Buy</button>
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
