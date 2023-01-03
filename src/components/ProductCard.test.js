import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import ProductCard from './ProductCard';

const defaultProductData = {
    id: "Ex2ods",
    name: "Example Product",
    cost: 100,
    qty: 0
}

const renderProductCardComponent = (productData) => render(
        <ProductCard
            productData={productData}
            increaseQtyInCart={jest.fn()}
            decreaseQtyInCart={jest.fn()}
        />
);

describe('Product Card', () => {

    describe('Render default ProductCard', () => {
        test("Renders ProductCard", () => {
            const utils = renderProductCardComponent({...defaultProductData});
            expect(utils).toMatchSnapshot();
        });
    });
    
    describe('Tests for "static" product information', () => {
        test('Renders product card with id of "XUAk3"', () => {

            renderProductCardComponent({
                ...defaultProductData,
                id: 'XUAk3',
            });
    
            const productCard = screen.getByTestId('p-card');
            expect(productCard).toBeInTheDocument();         
            expect(productCard).toHaveAttribute('id','XUAk3');
            expect(productCard).not.toHaveAttribute('id', defaultProductData.id);

        });

        test('Renders product card with name of "Apple Lexicon"', () => {
 
             renderProductCardComponent({
                 ...defaultProductData,
                 name: 'Apple',
             });
     
             const productName = screen.getByText('Apple Lexicon');
             expect(productName).toBeInTheDocument();            
 
        });

        test('Renders product card with p-cost that has text of "$500"', () => {
 
             renderProductCardComponent({
                 ...defaultProductData,
                 cost: 500,
             });
     
             const productCost = screen.getByTestId('p-cost');
             expect(productCost.textContent).toBe("$500");
             expect(productCost.textContent).not.toBe("500");
             expect(productCost.textContent).not.toBe(500);  
             expect(productCost.textContent).not.toBe(defaultProductData.cost);
             expect(productCost.textContent).not.toBe("$"+defaultProductData.cost);
 
        });
    });    

});
