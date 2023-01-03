import React, { useState } from "react";
import FlavorWheelImage from "../assets/images/flavor-wheel.png";
import "../assets/css/ProductCard.css";
const ProductCard = ({productData, increaseQtyInCart, decreaseQtyInCart, setQtyInCart}) => {
    const {id, name, cost, qty} = productData;

    const handleIncreaseQty = (event) => {
        const productID = event.target.id;
        const qtyInput = document.querySelector(`#\\3${productID}.qty`);

        if (qtyInput.value >= 0) {
            const newValue = Number(qtyInput.value) + 1;
            qtyInput.value = newValue;
        }
    };

    const handleDecreaseQty = (event) => {
        const productID = event.target.id;
        const qtyInput = document.querySelector(`#\\3${productID}.qty`);

        if (qtyInput.value > 0) {
            const newValue = Number(qtyInput.value) - 1;
            qtyInput.value = newValue;
        }
    };

    const onTextChange = (event) => {
        const newValue = event.target.value;
        if (newValue >= 0) {
            event.target.value = newValue;
        }
    }

    const changeProductQuantity = (event) => {
        const productID = event.target.id;
        const qtyInput = document.querySelector(`#\\3${productID}.qty`);

        if (qtyInput.value >= 0) {
            setQtyInCart(qtyInput.value, productID);
            qtyInput.value = 0;
        }
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
                <button id={id} className="qty-adjuster" onClick={handleDecreaseQty} >-</button>
                <input id={id} className="qty" placeholder="0" onChange={onTextChange} />
                <button id={id} className="qty-adjuster" onClick={handleIncreaseQty} >+</button>
            </div>
            <button id={id} className="add" onClick={changeProductQuantity}>ADD</button>
        </div>
    );       
};

export default ProductCard;