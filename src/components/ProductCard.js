import React from "react";
import FlavorWheelImage from "../assets/images/flavor-wheel.png";
import "../assets/css/ProductCard.css";
const ProductCard = ({productData, addToCart}) => {
    const {id, name, cost, qty} = productData;
    
    const handleAdd = (e) => {
        addToCart(productData);
    };
    
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
                <button className="qty-adjuster" >-</button>
                <p data-testid="p-qty">{qty}</p>
                <button className="qty-adjuster" onClick={handleAdd}>+</button>
            </div>
        </div>
    );
};

export default ProductCard;