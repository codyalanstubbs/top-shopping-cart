import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/Cart.css";

const Cart = () => {
    const [items, setItems] = useState(0);
    return (
        <div className="cart">
            <FontAwesomeIcon icon={faCartShopping}/>
            <div className="cart-count">{items}</div>
        </div>
    );
};

export default Cart;