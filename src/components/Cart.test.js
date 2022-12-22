import React from 'react';
import uniquid from "uniquid";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from './Cart';

const defaultShoppingCart = [];

describe('Cart', () => {
    
    describe('Render default Cart', () => {
        
        test("Renders Cart snapshot", () => {
            const utils = render(<Cart shoppingCart={defaultShoppingCart}/>);
            expect(utils).toMatchSnapshot();
        });   

        test("Renders Cart with cart-count 0", () => {
            render(<Cart shoppingCart={defaultShoppingCart}/>);

            const cartCount = screen.getByTestId("cart-count");
            expect(cartCount).toBeInTheDocument();
            expect(cartCount.textContent).toBe("0");
        });

    });

    describe('Render Cart with products', () => {
        
        test("Renders Cart with cart-count 0 despite having products in shoppingCart", () => {
            render(
                <Cart 
                    shoppingCart={
                        [
                            {id: uniquid(), name: "Apples",     cost: 100, qty: 0},
                            {id: uniquid(), name: "Oranges",    cost: 100, qty: 0},
                            {id: uniquid(), name: "Chocolate",  cost: 100, qty: 0},
                            {id: uniquid(), name: "Green Tea",  cost: 100, qty: 0},
                        ]
                    }
                />
            );

            const cartCount = screen.getByTestId("cart-count");
            expect(cartCount).toBeInTheDocument();
            expect(cartCount.textContent).toBe("0");
        });

        test("Renders Cart with cart-count 1 despite having multiple products in shoppingCart", () => {
            render(
                <Cart 
                    shoppingCart={
                        [
                            {id: uniquid(), name: "Apples",     cost: 100, qty: 0},
                            {id: uniquid(), name: "Oranges",    cost: 100, qty: 1},
                            {id: uniquid(), name: "Chocolate",  cost: 100, qty: 0},
                            {id: uniquid(), name: "Green Tea",  cost: 100, qty: 0},
                        ]
                    }
                />
            );

            const cartCount = screen.getByTestId("cart-count");
            expect(cartCount).toBeInTheDocument();
            expect(cartCount.textContent).toBe("1");
        });

        test("Renders Cart with cart-count 2 despite having multiple products in shoppingCart", () => {
            render(
                <Cart 
                    shoppingCart={
                        [
                            {id: uniquid(), name: "Apples",     cost: 100, qty: 1},
                            {id: uniquid(), name: "Oranges",    cost: 100, qty: 1},
                            {id: uniquid(), name: "Chocolate",  cost: 100, qty: 0},
                            {id: uniquid(), name: "Green Tea",  cost: 100, qty: 0},
                        ]
                    }
                />
            );

            const cartCount = screen.getByTestId("cart-count");
            expect(cartCount).toBeInTheDocument();
            expect(cartCount.textContent).toBe("2");
        });

        test("Renders Cart with cart-count 2 with only 1 product in cart", () => {
            render(
                <Cart 
                    shoppingCart={
                        [
                            {id: uniquid(), name: "Apples",     cost: 100, qty: 2},
                        ]
                    }
                />
            );

            const cartCount = screen.getByTestId("cart-count");
            expect(cartCount).toBeInTheDocument();
            expect(cartCount.textContent).toBe("2");
        });

    });
    
});
