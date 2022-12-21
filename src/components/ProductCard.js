import React from "react";
import FlavorWheelImage from "../assets/images/flavor-wheel.png";

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
            <p data-testid="p-name">{name}</p>
            <p data-testid="p-cost">{"$"+cost}</p>
            <div>
                <p>-</p>
                <p data-testid="p-qty">{qty}</p>
                <p onClick={handleAdd}>+</p>
            </div>
        </div>
    );
};

export default ProductCard;