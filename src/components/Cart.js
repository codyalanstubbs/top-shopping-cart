import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/Cart.css";

const Cart = ({shoppingCart}) => {
    // Calculate total quantity of all product quantities
    let numItemsInCart = shoppingCart.reduce((totalQty, product) => {
            return totalQty + product.qty;
    }, 0);

    return (
        <div className="cart">
            <FontAwesomeIcon icon={faCartShopping}/>
            <div data-testid="cart-count" className="cart-count">
                {numItemsInCart}
            </div>
        </div>
    );
};

export default Cart;