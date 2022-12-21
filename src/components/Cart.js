import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/Cart.css";

const Cart = ({shoppingCart}) => {
    return (
        <div className="cart">
            <FontAwesomeIcon icon={faCartShopping}/>
            <div className="cart-count">{shoppingCart.length}</div>
        </div>
    );
};

export default Cart;