import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Nav from "./Nav";

const RouteSwitch = () => {
    const [shoppingCart, setShoppingCart] = useState([]);

    const addToCart = (productData) => {

        // Separate newShoppingCart from old shopping cart
        let newShoppingCart = [...shoppingCart];
        let productInCart;

        // Check if the product is already in the cart...
        let isProductInCart = newShoppingCart.some((prod) => prod.id === productData.id);
        if (!isProductInCart) {
            // ...if product is NOT in the cart, then add it
            newShoppingCart = newShoppingCart.concat(productData);
        } else {
            // ...if product is in the cart, then add to its quantity
            productInCart = newShoppingCart.find((prod) => prod.id === productData.id);
            productInCart.qty = productInCart.qty + 1;
        }

        setShoppingCart(newShoppingCart);
    };

    return (
        <BrowserRouter>
            <Nav shoppingCart={shoppingCart}/>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/shop/" element={<Shop addToCart={addToCart} />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;