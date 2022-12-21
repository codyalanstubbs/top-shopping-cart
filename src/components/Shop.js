import React, { useState } from "react";
import uniquid from "uniquid";
import ProductCard from "./ProductCard";

const Shop = ({addToCart}) => {
    const allProductsData = [
        {id: uniquid(), name: "Apples",     cost: 100, qty: 0},
        {id: uniquid(), name: "Oranges",    cost: 100, qty: 0},
        {id: uniquid(), name: "Chocolate",  cost: 100, qty: 0},
        {id: uniquid(), name: "Green Tea",  cost: 100, qty: 0},
    ];

    return (
        <main>    
            <section id="samples">
                <h2 className="samples-header">
                    Hundreds of product lexicons, all in one place!
                </h2>
                <div className="samples">
                    {allProductsData.map((product) => {
                        return (
                            <ProductCard 
                                productData={product} 
                                addToCart={addToCart}
                            />
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default Shop;