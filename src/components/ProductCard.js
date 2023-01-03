import React, { useState } from "react";
import FlavorWheelImage from "../assets/images/flavor-wheel.png";
import "../assets/css/ProductCard.css";
const ProductCard = ({productData, increaseQtyInCart, decreaseQtyInCart, setQtyInCart}) => {
    const {id, name, cost, qty} = productData;

    const handleIncreaseQty = (e) => {
        increaseQtyInCart(productData)
    };

    const handleDecreaseQty = (e) => {
        decreaseQtyInCart(id);
    };

    const onTextChange = (event) => {
        const newValue = event.target.value;
        const productID = event.target.id;
        setQtyInCart(newValue, productID);
    }
    
    return (
        <div
            key={id}
            id={id}
            data-testid="p-card" 
            className="sample"
        >
            <img src={FlavorWheelImage} alt="A flavor wheel for green tea." width="100px" height="100px" />
            <p data-testid="p-name">{name} Lexicon</p>
            <p data-testid="p-cost">{"$"+cost}</p>
            <div className="p-qty-container">
                <button className="qty-adjuster" onClick={handleDecreaseQty}>-</button>
                <input id={id} data-testid="p-qty" value={qty} onChange={onTextChange}/>
                <button className="qty-adjuster" onClick={handleIncreaseQty}>+</button>
            </div>
        </div>
    );       
};

export default ProductCard;