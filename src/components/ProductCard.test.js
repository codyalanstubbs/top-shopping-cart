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
            addToCart={jest.fn()}
            handleIncreaseQnt={jest.fn()}
            handleDecreaseQnt={jest.fn()}
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

    describe("Test dynamic, UI-driven changes to product data", () => {

        test("Increases product quantity by 1", () => {
            renderProductCardComponent({...defaultProductData});
            const increaseQuantityBtn = screen.getByText('+');
            expect(increaseQuantityBtn.className).toBe("qty-adjuster");

            userEvent.click(increaseQuantityBtn);

            const productQuantity = screen.getByTestId("p-qty");
            expect(productQuantity).toBeInTheDocument();
            expect(productQuantity.textContent).toBe("1");
        });

        test("Does not decrease product quantity when already 0", () => {
            renderProductCardComponent({...defaultProductData, qty: 0});
            const decreaseQuantityBtn = screen.getByText('-');
            expect(decreaseQuantityBtn.className).toBe("qty-adjuster");

            userEvent.click(decreaseQuantityBtn);

            const productQuantity = screen.getByTestId("p-qty");
            expect(productQuantity).toBeInTheDocument();
            expect(productQuantity.textContent).toBe("0");
            expect(productQuantity.textContent).not.toBe("-1");
        });

        test("Decreases product quantity by 1 when quantity > 0", () => {
            renderProductCardComponent({...defaultProductData, qty: 1});
            const decreaseQuantityBtn = screen.getByText('-');
            expect(decreaseQuantityBtn.className).toBe("qty-adjuster");

            userEvent.click(decreaseQuantityBtn);

            const productQuantity = screen.getByTestId("p-qty");
            expect(productQuantity).toBeInTheDocument();
            expect(productQuantity.textContent).toBe("0");
        });

      });
    

});
