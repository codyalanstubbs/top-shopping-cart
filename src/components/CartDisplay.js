import React from "react";
import "../assets/css/CartDisplay.css"; 
import FlavorWheelImage from "../assets/images/flavor-wheel.png";


const CartDisplay = ({shoppingCart, toggleDisplayCart,  increaseQtyInCart, decreaseQtyInCart, setQtyInCart}) => {

    return (
        <div className="displayed-cart" data-testid="displayed-cart">
            <div className="close-cart" onClick={toggleDisplayCart}>{'Hide>'}</div>
            <h2>Shopping Cart</h2>
            {
                shoppingCart.map((product) => {
                    const { id, name, cost, qty } = product;
                    return (
                        <div key={id} id={id} className="product-box" data-testid="product-box">
                            <img src={FlavorWheelImage} alt="A flavor wheel for green tea." width="100px" height="100px" />
                            <div className="product-details">
                                <div className="lexicon-cost">
                                    <h3 data-testid="p-name">{name} Lexicon</h3>
                                    <p data-testid="p-cost">{"$"+cost}</p>
                                </div>
                                <div className="qty-container">
                                    <p>Qty:&nbsp;</p>
                                    <p data-testid="p-qty" className="cart-qty">{qty}</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default CartDisplay;