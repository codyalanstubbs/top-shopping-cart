import React, { useState } from "react";
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
        {id: 1, name: "Apples",     cost: 100},
        {id: 2, name: "Oranges",    cost: 100},
        {id: 3, name: "Chocolate",  cost: 100},
        {id: 4, name: "Green Tea",  cost: 100},
    ]);

    const removeFromCart = (id) => {
        const productID = Number(id);

        // Separate newShoppingCart from old shopping cart
        let newShoppingCart = [...shoppingCart];

        // Remove the product by id
        newShoppingCart = newShoppingCart.filter((product) => {
            console.log(product.id !== productID);
            return product.id !== productID;
        });

        setShoppingCart(newShoppingCart);
    };
    
    const setQtyInCart = (newValue, productData) => {
        const newNumber = Number(newValue);
        // Separate newShoppingCart from old shopping cart
        let newShoppingCart = [...shoppingCart];
        let productInCart;

        // Check if the product is already in the cart...
        let isProductInCart = newShoppingCart.some((prod) => prod.id === productData.id);
        if (!isProductInCart) {
            // ...if product is NOT in the cart, then add it
            newShoppingCart = newShoppingCart.concat(
                {
                    id: productData.id, 
                    name: productData.name, 
                    cost: productData.cost, 
                    qty: newNumber
                }
            );
        } else {
            // ...if product is in the cart, then add the new quantity
            productInCart = newShoppingCart.find((prod) => prod.id === productData.id);
            productInCart.qty = productInCart.qty + newNumber; 
        }
        
        setShoppingCart(newShoppingCart);

    };

    return (
        <BrowserRouter>
            <Nav shoppingCart={shoppingCart} toggleDisplayCart={toggleDisplayCart}/>
            <Routes>
                <Route 
                    path="/the-odin-project/21-shopping-cart/" element={<Home />}
                />
                <Route
                    path="/the-odin-project/21-shopping-cart/shop/" 
                    element={
                        <Shop 
                            setQtyInCart={setQtyInCart}
                            shoppingCart={shoppingCart} allProductsData={allProductsData}
                        />
                    }
                />
            </Routes>
            <CartDisplay 
                setQtyInCart={setQtyInCart}
                removeFromCart={removeFromCart}
                shoppingCart={shoppingCart}
                toggleDisplayCart={toggleDisplayCart}
            />
        </BrowserRouter>
    );
};

export default RouteSwitch;