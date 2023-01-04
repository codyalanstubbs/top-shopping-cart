import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import CartDisplay from './CartDisplay';

const shoppingCart = [
    { id: "Ex2ods", name: "Oranges",    cost: 100, qty: 0 },
    { id: "aAew4",  name: "Apples",     cost: 100, qty: 1 },
    { id: "VgdQa2", name: "Chocolate",  cost: 100, qty: 2 },
    { id: "6Lr0Pa", name: "Green Tea",  cost: 100, qty: 3 },
];

describe('Displaying products in the cart', () => {
    
    describe('Render cart with shoppingCart data', () => {
        render(<CartDisplay shoppingCart={shoppingCart} />);

        const productBoxes  = screen.queryAllByTestId('product-box');
        const productNames  = screen.getAllByTestId('p-name');
        const productQtys   = screen.getAllByTestId('p-qty');
        const productCosts  = screen.getAllByTestId('p-cost');

        test('Should render 4 product boxes', () => {
            expect(productBoxes.length).toBe(4);
        })

        for (let i = 0; i < shoppingCart.length; i++) {

            test(`Should render product box with id = product-${i}'s id = ${shoppingCart[i].id}`,  
                () => { expect(productBoxes[i].id).toBe(shoppingCart[i].id) }
            )
            test(`Should render product box with h1 = product-${i}'s name = ${shoppingCart[i].name}`,  
                () => { expect(productNames[i].textContent).toBe(`${shoppingCart[i].name} Lexicon`) }
            )
            test(`Should render product box with quantity input = product-${i}'s qty = ${shoppingCart[i].qty}`,  
                () => { expect(productQtys[i].textContent).toBe(`${shoppingCart[i].qty}`) }
            )
            test(`Should render product box with cost = product-${i}'s cost = ${shoppingCart[i].cost}`,  
                () => { expect(productCosts[i].textContent).toBe(`$${shoppingCart[i].cost}`) }
            )
        }

    });
    

});


