import React from "react";
import ProductCard from "./ProductCard";

const Shop = ({addToCart, decreaseQuantityInCart, shoppingCart, allProductsData}) => {

    return (
        <main>    
            <section id="samples">
                <h2 className="samples-header">
                    Check out the sensory lexicons we have below!
                </h2>
                <div className="samples">
                    {allProductsData.map((product) => {

                        // Check if the product is already in the cart...
                        let isProductInCart = shoppingCart.some((prod) => prod.id === product.id);
                        let productInCart;

                        if (!isProductInCart) {
                            // ...if product is NOT in the cart, then set qty to 0
                            product.qty = 0;
                        } else {
                            // ...if product is in the cart, then use its qty
                            productInCart = shoppingCart.find((prod) => prod.id === product.id);
                            product.qty = productInCart.qty;
                        }

                        return (
                            <ProductCard 
                                key={product.id}
                                productData={product} 
                                addToCart={addToCart}
                                decreaseQuantityInCart={decreaseQuantityInCart}
                                shoppingCart={shoppingCart}
                            />
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default Shop;