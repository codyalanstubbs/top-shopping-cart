import React from "react";
import "../assets/css/CartDisplay.css"; 
import FlavorWheelImage from "../assets/images/flavor-wheel.png";


const CartDisplay = ({shoppingCart, toggleDisplayCart,  increaseQtyInCart, decreaseQtyInCart}) => {

    return (
        <div className="displayed-cart" data-testid="displayed-cart">
            <div className="close-cart" onClick={toggleDisplayCart}>{'Hide>'}</div>
            {
                shoppingCart.map((product) => {
                    const { id, name, cost, qty } = product;
                        
                    const handleIncreaseQty = () => {
                        increaseQtyInCart(product);
                    };

                    const handleDecreaseQty = () => {
                        decreaseQtyInCart(id);
                    };

                    return (
                        <div key={id} id={id} className="product-box" data-testid="product-box">
                            <img src={FlavorWheelImage} alt="A flavor wheel for green tea." width="100px" height="100px" />
                            <h2 data-testid="p-name">{name} Lexicon</h2>
                            <p data-testid="p-cost">{"$"+cost}</p>
                            <div className="p-qty-container">
                                <button className="qty-adjuster" onClick={handleDecreaseQty}>-</button>
                                <input data-testid="p-qty" value={qty} onChange={() => console.log("do nothing")}/>
                                <button className="qty-adjuster" onClick={handleIncreaseQty}>+</button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default CartDisplay;