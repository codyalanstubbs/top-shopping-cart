import React from "react";
import "../assets/css/CartDisplay.css"; 
import FlavorWheelImage from "../assets/images/flavor-wheel.png";


const CartDisplay = ({shoppingCart, toggleDisplayCart, removeFromCart}) => {
    const cartCostTotal = shoppingCart.reduce(
        (accumulator, product) =>  accumulator + (product.qty * product.cost),
        0
    );

    const totalCurrency = new Intl.NumberFormat("en-US",
        {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        }
    ).format(cartCostTotal);

    const itemsCount = shoppingCart.reduce(
        (accumulator, product) =>  accumulator + product.qty,
        0
    );

    const handleClickRemoveBtn = (event) => {
        const productID = event.target.id;
        console.log(productID);
        removeFromCart(productID);
    };

    return (
        <div className="displayed-cart" data-testid="displayed-cart">
            <button className="close-cart" onClick={toggleDisplayCart}>Hide Cart</button>
            <h2>Shopping Cart</h2>
            <div className="products">
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
                                    <div className="qty-remove">
                                        <button id={id} onClick={handleClickRemoveBtn}>Remove From Cart</button>
                                        <div className="qty-container">
                                            <p>Qty:&nbsp;</p>
                                            <p data-testid="p-qty" className="cart-qty">{qty}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="product-total" >
                <p>
                    Subtotal ({itemsCount} items):&nbsp;
                </p>
                <strong>
                    {totalCurrency}
                </strong>
            </div>
        </div>
    );
};

export default CartDisplay;