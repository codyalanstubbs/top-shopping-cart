import React, { useState } from "react";
import uniquid from "uniquid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Nav from "./Nav";
import CartDisplay from "./CartDisplay";

const toggleDisplayCart = () => {
    const cart = document.querySelector(".displayed-cart");
    cart.classList.toggle("displayed");
};

const RouteSwitch = () => {
    const [shoppingCart, setShoppingCart ] = useState([]);

    const [ allProductsData, setAllProductsData ] = useState([
        {id: uniquid(), name: "Apples",     cost: 100},
        {id: uniquid(), name: "Oranges",    cost: 100},
        {id: uniquid(), name: "Chocolate",  cost: 100},
        {id: uniquid(), name: "Green Tea",  cost: 100},
    ]);

    const increaseQtyInCart = (productData) => {

        // Separate newShoppingCart from old shopping cart
        let newShoppingCart = [...shoppingCart];
        let productInCart;

        // Check if the product is already in the cart...
        let isProductInCart = newShoppingCart.some((prod) => prod.id === productData.id);
        if (!isProductInCart) {
            // ...if product is NOT in the cart, then add it
            productData.qty++;
            newShoppingCart = newShoppingCart.concat(productData);
        } else {
            // ...if product is in the cart, then add to its quantity
            productInCart = newShoppingCart.find((prod) => prod.id === productData.id);
            productInCart.qty++;
        }
        setShoppingCart(newShoppingCart);

    };

    const decreaseQtyInCart = (productID) => {

        // Separate newShoppingCart from old shopping cart
        let newShoppingCart = [...shoppingCart];
        let productInCart;

        // Check if the product is already in the cart...
        let isProductInCart = newShoppingCart.some((prod) => prod.id === productID);
        if (!isProductInCart) {
            // ...if product is NOT in the cart, then do nothing
            return;
        } else {
            // ...if product is in the cart, then add to its quantity
            productInCart = newShoppingCart.find((prod) => prod.id === productID);
            if (productInCart.qty > 0) productInCart.qty--; 
        }
        
        setShoppingCart(newShoppingCart);

    };
    
    const setQtyInCart = (newValue, productID) => {
        const newNumber = Number(newValue);
        // Separate newShoppingCart from old shopping cart
        let newShoppingCart = [...shoppingCart];
        let productInCart;

        // Check if the product is already in the cart...
        let isProductInCart = newShoppingCart.some((prod) => prod.id === productID);
        if (!isProductInCart) {
            // ...if product is NOT in the cart, then add it
            newShoppingCart = newShoppingCart.concat({id: productID, name: "Apples",     cost: 100, qty: newNumber});
        } else {
            // ...if product is in the cart, then add the new quantity
            productInCart = newShoppingCart.find((prod) => prod.id === productID);
            productInCart.qty = newNumber; 
        }
        
        setShoppingCart(newShoppingCart);

    };

    return (
        <BrowserRouter>
            <Nav shoppingCart={shoppingCart} toggleDisplayCart={toggleDisplayCart}/>
            <Routes>
                <Route 
                    path="/" element={<Home />}
                />
                <Route
                    path="/shop/" 
                    element={
                        <Shop 
                            increaseQtyInCart={increaseQtyInCart} 
                            decreaseQtyInCart={decreaseQtyInCart} 
                            setQtyInCart={setQtyInCart}
                            shoppingCart={shoppingCart} allProductsData={allProductsData}
                        />
                    }
                />
            </Routes>
            <CartDisplay 
                increaseQtyInCart={increaseQtyInCart}
                decreaseQtyInCart={decreaseQtyInCart} 
                shoppingCart={shoppingCart}
                toggleDisplayCart={toggleDisplayCart}
            />
        </BrowserRouter>
    );
};

export default RouteSwitch;